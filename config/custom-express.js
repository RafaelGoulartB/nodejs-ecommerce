const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');
const hbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const csrf = require('csurf');
const validator = require('express-validator');

class AppController {
  constructor() {
    this.app = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(bodyParser.urlencoded( {extended: true} ));
    this.app.use(bodyParser.json());
    this.app.use(cookieParser());
    this.app.use(session( {
      secret: 'secretpasscryp',
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 60000,
      },
    }));
    this.app.use(csrf({cookie:true}));
    this.app.use(validator());

    this.app.engine('hbs', hbs({
      extname: 'hbs',
      defaultLayout: 'layout',
      layoutsDir: 'views/layouts/',
    }
    ));
    this.app.set('view engine', 'hbs');
  }

  routes() {
    this.app.set('views', './views');
    this.app.use(express.static('./public'));

    consign()
      .include('routes')
      .then('dao')
      .then('helpers')
      .into(this.app);
  }
}

module.exports = new AppController().app;
