module.exports = (app) => {
  app.get('/', (req, res) => {
    let success, warning = app.helpers.msg(req);
    let categories, products;
    const connection = app.dao.connectionFactory();
    const categoriesDAO = new app.dao.categoriesDAO(connection);
    const productsDAO = new app.dao.productsDAO(connection);

    categoriesDAO.list()
      .then(result => categories = result)
      .catch(err => warning = 'it was not possible list categories');
    productsDAO.list()
      .then(result => products = result)
      .catch(err => warning = 'it was not possible list products');

    console.log(req.session['user']);
    setTimeout(() => {
      res.status(200).render('home/index', {
        title: 'Home',
        categories, products,
        success, warning,
        user: req.session['user'],
      });
    }, 100)

  })
}
