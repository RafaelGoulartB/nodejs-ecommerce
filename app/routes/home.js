module.exports = app => {
  
  //Select all
  app.get('/', (req, res) => {
    const connection = app.dao.connectionFactory();
    const productsDAO = new app.dao.productsDAO(connection);
    productsDAO.list(6)
      .then(products => res.render('home', {products: products, search: false}))
      .catch(err => res.status(400).send(err));
  });
  // Filter by Category
  app.get('/s/:filter', (req, res) => {
    const filter = req.params.filter;
    const connection = app.dao.connectionFactory();
    const productsDAO = new app.dao.productsDAO(connection);

    productsDAO.filterByCategory(filter)
      .then(products => res.render('home', {products: products, search: true}))
      .catch(err => res.status(400).send(err))
  });
  // Select by ID
  app.get('/product/:id/', (req, res) => {
    const connection = app.dao.connectionFactory();
    const productsDAO = new app.dao.productsDAO(connection);
    const id = req.params.id;

    productsDAO.get(id)
      .then(result => res.status(200).send(result))
      .catch(err => res.status(400).send(err));
  });
  // Add new product
  app.post('/product', (req, res) => {
    const connection = app.dao.connectionFactory();
    const productsDAO = new app.dao.productsDAO(connection);
    const product = req.body;
    productsDAO.add(product)
      .then(result => res.status(201).send("Product added."))
      .catch(error => res.status(400).send(error))
  });
  //Remove a product by ID
  app.delete('/product/:id', (req, res) => {
    const connection = app.dao.connectionFactory();
    const productsDAO = new app.dao.productsDAO(connection);
    const id = req.params.id;

    productsDAO.remove(id)
      .then(result => res.status(200).send(`Product with id = ${id} was removed.`))
      .catch(err => res.status(400).send(err));
  });
}