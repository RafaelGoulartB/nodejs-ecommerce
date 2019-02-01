module.exports = app => {
  
  app.get('/', (req, res) => {
    res.render('home');
  });
  app.get('/product/:id', (req, res) => {
    const id = req.params.id;
    res.render('product');
  });
}