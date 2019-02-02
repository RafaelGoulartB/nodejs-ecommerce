module.exports = app => {
  app.get('/product', (req, res) => {
    let connection = app.dao.connectionFactory();
    let productsDAO = new app.dao.productsDAO(connection);

    productsDAO.listAll()
      .then(result => res.send(result))
      .catch(err => console.log)
  })
  app.get('/product/:id/', (req, res) => {
    const id = req.params.id;
    let connection = app.dao.connectionFactory();
    let productsDAO = new app.dao.productsDAO(connection);

    productsDAO.get(id)
      .then(result => res.send(result))
      .catch(console.log)
  });
  app.post('/product', (req, res) => {
    const product = req.body;
    res.send(product);
    console.log(product);
    

  //   let connection = app.dao.connectionFactory();
  //   let productsDAO = new app.dao.productsDAO(connection);

  //   productsDAO.add(product)
  //     .then(result => res.send(result))
  //     .catch(error => res.send(error))
  })


};
