module.exports = (app) => {
  app.get('/log-out', (req, res) => {
    req.session['user'] = null;
    res.redirect('/');
  });
};
