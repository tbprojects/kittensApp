# kittensApp

Little kittens are cute, aren't they? Let's learn basics of the AngularJS app testing with Jasmine. 

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.14.0.

**Use `yo` generators for adding routes, controllers, services, etc.**

## Setup

You need to have [NodeJS](https://nodejs.org/) and [Bower](http://bower.io/) installed. Then execute following:

    git clone git@github.com:tbprojects/kittensApp.git
    cd kittensApp
    npm install -g grunt-cli bower yo generator-karma generator-angular json-server jshint
    npm install
    bower install
    grunt test
           
After executing the last command you should have app ready for development with passing specs.           

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Using custom API

**Path to the API is `/api/`**

By default app is expecting to have an API at `localhost:8080`.

You may use `grunt serve --api=fake` - to work with fake api thanks to [json-server](https://github.com/typicode/json-server). 
It runs at `localhost:9010`. Fake database is defined `fake_db.json`.

You may also define custom host with `grunt serve --api=localhost:3000`

## Testing

Running `grunt test` will run the unit tests with karma.

## Exercises

to be defined
