module.exports = app => {
  app.get('/sign-in', (req, res) => {
    let success, warning = app.helpers.msg(req);

    res.render('sign/in', {
      title: 'Sign In',
      success, warning,
      csrfToken: req.csrfToken(),
    });
  });

  app.post('/sign-in', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    req.checkBody('email', 'Email is not Valid!').notEmpty().isEmail();
    req.checkBody('password', 'Password must be at least 4 digits!').notEmpty().isLength({min: 4});
    const errorsInValidation = req.validationErrors();
    console.log(errorsInValidation);
    if (errorsInValidation) {
      req.session['warning'] = errorsInValidation[0].msg;
      res.redirect('/sign-in');
    }

    const connection = app.dao.connectionFactory();
    const userDao = new app.dao.userDAO(connection);

    userDao.login(email, password)
      .then(result => {
        req.session['success'] = result;
        // Create Session
        res.redirect('/');
      })
      .catch(err => {
        req.session['warning'] = err;
        res.redirect('/sign-in');
      });
  });

}
