class productsDAO {
  constructor(connection) {
    this.connection = connection;
  }
  list(limit=null) {
    return new Promise((resolve, reject) => {
      if (limit)
        this.connection
          .query('select * from products LIMIT ?', limit,
            (err, result) => {
              if (err) return reject(err)
              return resolve(result)
            }
          );
       // End Queries for limits
      else this.connection
        .query('select * from products',
          (err,result) => {
            if (err) return reject(err);
            return resolve(result);
          }
        );
    });
  }
  orderedList(order=null) {
    return new Promise((resolve, reject) => {
      this.connection.query('select * from products order by ?', order,
        (err, result) => {
          if (err) return reject(err);
          return resolve(result);
        }
      );
    });
  }
}

module.exports = () => productsDAO;
