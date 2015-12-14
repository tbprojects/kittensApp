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

## Workshop exercises

1. Label for comments has to be changed from `n comments` to `no meows yet`, `1 meow`, `n meows`.
    * implement change in the kittens model
    * test different conditions for that method
2. Add possibility to like the kitten by clicking a button on the kittens list.
    * implement `like` method in kittens model that sends POST request to `/kitten/:id/like`
    * implement controller for `kittens-row` directive
        * add `like` method that calls `resource.like()`
            * when request is successful: store info on liked kitten in localstorage and increment `resource.likes`
            * when request is failed: display error message with SweetAlert 
        * implement `liked` method which relays on information stored in localstorage
    * add "like" button to `kitten-row` directive and handle clicking on it
    * implement tests
3. There is a buggy feature for adding new kittens. There is no data validation and failure is not handled properly.
 We should validate presence of `title`, `url` and `submitted_by` attributes. If any of them is empty, then error 
 message should be presented. Otherwise let's make a POST request to `/kittens` and display success / failure message.
    * implement `isValid` method in kitten model... and test it.
    * test successful / failing scenarios of creating kitten record.
    * use `SweetAlert` service for displaying messages and test calling that service by using `spyOn`. 
4. Implement fetching comments for a certain kitten. Assume there is `/kittens/:id/comments` endpoint.
    * implement `fetchComments` method in kitten model... and test it. 
    * display comments in the `/kittens/:id` view
