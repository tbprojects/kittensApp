'use strict';

describe('Directive: kittenSaysButton', function () {

  // load the directive's module
  beforeEach(module('kittensApp'));
  beforeEach(module('kittensApp.templates'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    element = angular.element('<kitten-says-button></kitten-says-button>');
    element = $compile(element)(scope);
    scope.$digest();
  }));

  it('should contain text "Kitten says"', function() {
    expect(element.text()).toContain('Kitten says');
  });

  describe('when button is clicked', function(){
    var SweetAlert = {},
        $httpBackend = {};

    beforeEach(inject(function(_$httpBackend_, _SweetAlert_){
      SweetAlert = _SweetAlert_;
      $httpBackend = _$httpBackend_;
      spyOn(SweetAlert, 'swal').and.callThrough();
    }));

    describe('when request is successful', function() {
      beforeEach(function(){
        $httpBackend.expect('GET', '/kittens/says').respond({message: 'meow'});
        element.find('button').click();
        $httpBackend.flush();
      });

      it('should make http request for message', function(){
        $httpBackend.expectGET('/kitten/says');
      });

      it('should display sweet alert with message', function(){
        expect(SweetAlert.swal).toHaveBeenCalledWith('meow', jasmine.any(String), 'success');
      });
    });

    describe('when request is failed', function() {
      beforeEach(function(){
        $httpBackend.expect('GET', '/kittens/says').respond(404, {});
        element.find('button').click();
        $httpBackend.flush();
      });

      it('should display sweet alert with error message', function(){
        expect(SweetAlert.swal).toHaveBeenCalledWith(jasmine.any(String), jasmine.any(String), 'error');
      });
    });
  });
});
