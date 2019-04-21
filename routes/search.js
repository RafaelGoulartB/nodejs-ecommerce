module.exports = app => {
  app.get('/search/o/:order', (req, res) => {
    let success, warning = app.helpers.msg(req);
    const order = req.params.order;
    const connection = app.dao.connectionFactory();
    const productsDao = new app.dao.productsDAO(connection);
    productsDao.list()
      .then(result => res.render('search/index', {
        products: result,
        success, warning,
      }));


  });
  app.get('/search/f/:filter', (req, res) => {
    let success, warning = app.helpers.msg(req);
    const filter = req.params.filter;

    const connection = app.dao.connectionFactory();
    const productsDao = new app.dao.productsDAO(connection);
    productsDao.list()
      .then(result => res.render('search/index', {
        products: result,
        success, warning,
    }));

  });
}
