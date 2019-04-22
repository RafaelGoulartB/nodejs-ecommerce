module.exports = app => {
  app.get('/order/:order', (req, res) => {
    let success, warning = app.helpers.msg(req);
    const order = req.params.order;

    let active_tab;
    if (order == 'rating') active_tab = 'rating';
    if (order == 'low-price') active_tab = 'low-price';
    if (order == 'price') active_tab = 'price'

    const connection = app.dao.connectionFactory();
    const productsDao = new app.dao.productsDAO(connection);
    productsDao.orderedList(order)
      .then(result => res.render('search/index', {
        products: result,
        success, warning,
        active_tab,
      }))
      .catch(err => console.log(err));


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
