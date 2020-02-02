class productsDAO {
  constructor(connection) {
    this.connection = connection;
  }
  list(limit=null) {
    return new Promise((resolve, reject) => {
      if (limit) {
        this.connection
            .query('select * from products LIMIT ?', limit,
                (err, result) => {
                  if (err) return reject(err);
                  return resolve(result);
                }
            );
      }
      // End Queries for limits
      else {
        this.connection
            .query('select * from products',
                (err, result) => {
                  if (err) return reject(err);
                  return resolve(result);
                }
            );
      }
    });
  }
  orderedList(order=null) {
    return new Promise((resolve, reject) => {
      if (order == 'low-price') {
        this.connection.query('select * from products ORDER BY price ASC',
            (err, result) => {
              if (err) return reject(err);
              return resolve(result);
            });
      }
      this.connection.query('select * from products ORDER BY ?? DESC', order,
          (err, result) => {
            if (err) return reject(err);
            return resolve(result);
          });
    });
  }
  filteredList(filter) {
    return new Promise((resolve, reject) => {

    });
  }
  getById(ids) {
    return new Promise((resolve, reject) => {
      this.connection.query(`select * from products where id in (${ids})`,
          (err, result) => {
            if (err) return reject(err);
            return resolve(result);
          });
    });
  }
}

module.exports = () => productsDAO;
