const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');
const session = require('express-session');

class AppController {
  constructor() {
    this.app = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(bodyParser.urlencoded( {extended: true} ));
    this.app.use(bodyParser.json());
    this.app.use(express.static('./public'));

    this.app.set('view engine', 'ejs');

    this.app.use(session( {
      secret: 'secretpasscryp',
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 60000,
      },
    }));
  }

  routes() {
    this.app.set('views', './views');

    consign()
        .include('routes')
        .then('dao')
        .then('controllers')
        .into(this.app);
  }
}

module.exports = new AppController().app;
