module.exports = (app) => {
  app.get('/order/:order', (req, res) => {
    let success; const warning = app.helpers.msg(req);
    const order = req.params.order;

    let ActiveTab;
    if (order == 'rating') ActiveTab = 'rating';
    if (order == 'low-price') ActiveTab = 'low-price';
    if (order == 'price') ActiveTab = 'price';

    const connection = app.dao.connectionFactory();
    const productsDao = new app.dao.productsDAO(connection);
    productsDao.orderedList(order)
        .then((result) => res.render('search/index', {
          products: result,
          success, warning,
          active_tab: ActiveTab,
        }))
        .catch((err) => console.log(err));
  });
};
