module.exports = (app) => {
  app.get('/', (req, res) => {
    let success, warning = app.helpers.msg(req);
    res.status(200).render('home/index', {
      title: 'Home',
      success: 'Opa, essa é uma mensagem de suceso', warning: 'Essa é uma mesagem de erro',
    });
  })
}
