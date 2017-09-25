'use strict';

module.exports = function(app) {
  var controllers = require('./controllers');

  app.route('/').get(controllers.movies);
  app.route('/movies').get(controllers.movies);
};
