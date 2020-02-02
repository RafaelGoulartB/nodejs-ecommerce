module.exports = (app) => {
  app.get('/', (req, res) => {
    let success; let warning = app.helpers.msg(req);
    let categories; let products;
    const connection = app.dao.connectionFactory();
    const categoriesDAO = new app.dao.categoriesDAO(connection);
    const productsDAO = new app.dao.productsDAO(connection);

    categoriesDAO.list()
        .then((result) => categories = result)
        .catch((err) => warning = 'it was not possible list categories');
    productsDAO.list(9)
        .then((result) => products = result)
        .catch((err) => warning = 'it was not possible list products');

    setTimeout(() => {
      res.status(200).render('home/index', {
        title: 'Home',
        categories, products,
        success, warning,
        user: req.session['user'],
      });
    }, 100);
  });
};
