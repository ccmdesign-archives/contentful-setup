'use strict'

// Libs
var path = require('path')
var Liquid = require('liquidjs')
var express = require('express')
var bodyParser = require('body-parser')

// Institutional website
var routes = require('./src/routes')

var app = express()
var port = process.env.PORT || 3000;

var engine = Liquid({
  root: __dirname,
  extname: '.liquid'
})

app.engine('liquid', engine.express());
app.set('views', path.join(__dirname, '/src/views'))
app.set('view engine', 'liquid');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '/public')))

routes(app)

// Handles 404
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port, function () {
  console.log('App listening on port 3000…')
})
