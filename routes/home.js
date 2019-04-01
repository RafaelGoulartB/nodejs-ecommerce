module.exports = (app) => {
  app.get('/', (req, res) => {
    let success, warning = app.helpers.msg(req);
    let categories;
    const connection = app.dao.connectionFactory();
    const categoriesDAO = new app.dao.categoriesDAO(connection);
    categoriesDAO.list()
      .then(result => categories = result)
      .catch(err => warning = err);

    setTimeout(() => {
      res.status(200).render('home/index', {
        title: 'Home',
        categories,
        success, warning,
      });
    }, 80)

  })
}
