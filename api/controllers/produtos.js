module.exports = app => {

  app.get('/product', (req, res) => {
    const connection = app.dao.connectionFactory();
    const productsDAO = new app.dao.productsDAO(connection);
    productsDAO.listAll()
      .then(result => res.send(result))
      .catch(err => console.log)
  });

  app.get('/product/:id/', (req, res) => {
    const connection = app.dao.connectionFactory();
    const productsDAO = new app.dao.productsDAO(connection);
    const id = req.params.id;

    productsDAO.get(id)
      .then(result => res.send(result))
      .catch(console.log)
  });

  app.post('/product', (req, res) => {
    const connection = app.dao.connectionFactory();
    const productsDAO = new app.dao.productsDAO(connection);
    const product = req.body;
    productsDAO.add(product)
      .then(result => res.send(result))
      .catch(error => res.send(error))
  });


};
