const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');

module.exports = () => {
  let app = express();

  app.use(bodyParser.urlencoded( {extended: true} ))
  
  app.set('view engine', 'ejs');
  app.use(express.static('./public'));
  app.set('views', './views');

  consign()
    .include('routes')
    .into(app);

  return app;
};