'use strict';

// See config example at
// https://github.com/tbprojects/grunt-json-server/tree/custom_routes#custom-routes

var customRoutes = {
  '/kittens/says': {
    method: 'get',
    handler: function(req, res) {
      var sounds = ['meow', 'purr', 'hiss', 'yowl'];
      var index = Math.floor(Math.random() * sounds.length);
      return res.json({message: sounds[index]});
    }
  }
};

module.exports = customRoutes;
