module.exports = (app) => {
  // Select all
  app.get('/', (req, res) => {
    const connection = app.dao.connectionFactory();
    const productsDAO = new app.dao.productsDAO(connection);
    productsDAO.list(6)
        .then((products) => res.render('home', {products: products, search: false, active_bar: 'pp'}))
        .catch((err) => res.status(400).send(err));
  });
  // Filter by Category
  app.get('/s/:filter', (req, res) => {
    const filter = req.params.filter;
    let active_bar = null;
    if (filter == 'asc') active_bar = 'lp';
    if (filter == 'desc') active_bar = 'hp';

    const connection = app.dao.connectionFactory();
    const productsDAO = new app.dao.productsDAO(connection);

    productsDAO.filterByCategory(filter)
        .then((products) => res.render('home', {products: products, search: true, active_bar}))
        .catch((err) => res.status(400).send(err));
  });
};
