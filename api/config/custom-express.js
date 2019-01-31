const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

module.exports = ()  => {
  let app = express();

  app.set(bodyParser.urlencoded({ extended: true }));
  app.set(bodyParser.json());

  consign()
    .include('controllers')
    .then('dao')
    .into(app)
  
    return app;
}