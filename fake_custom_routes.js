'use strict';

// See config example at
// https://github.com/tbprojects/grunt-json-server/tree/custom_routes#custom-routes

var customRoutes = {
  '/kittens/:id/like': {
    method: 'POST',
    handler: function(req, res) {
      var oddId = req.params.id % 2;
      if (oddId) {
        return res.json(422, {error: true});
      } else {
        return res.json({ok: true});
      }
    }
  }
};

module.exports = customRoutes;
