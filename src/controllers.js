'use strict';

var contentful = require('contentful')

var client = contentful.createClient({
  space: '3cqto552i2gc',
  accessToken: '8336805219fe9179b077c7d1424bbe56c4b4ecc875b80cb94e1f93cc91f2682b'
})

exports.movies = function(req, res) {
  client.getEntries()
    .then(function(entries) {
      res.render('movies', {'movies': entries.items})
    })
    .catch(function(e) {
      console.log(e)
    });
};
