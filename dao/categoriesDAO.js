class categoriesDAO {
  constructor(connection) {
    this.connection = connection;
  }
  list(limit=null) {
    return new Promise((resolve, reject) => {
      if (limit) {
        this.connection
            .query('select * from product_categories limit ?', limit,
                (err, result) => {
                  if (err) return reject(err);
                  return resolve(result);
                });
      }
      this.connection
          .query('select * from product_categories',
              (err, result) => {
                if (err) return reject(err);
                return resolve(result);
              });
    });
  }
}

module.exports = () => categoriesDAO;
