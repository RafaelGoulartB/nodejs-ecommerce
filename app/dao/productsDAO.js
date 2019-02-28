class ProductsDAO {

  constructor(connection) {
    this.connection = connection;
  }

  list(limmit, order) {
    return new Promise((resolve, reject) => {
      if(!limmit) {
        this.connection.query('select * from products', (error, result) => {
          if(error) return reject(error);
          return resolve(result);
        })
      }
      this.connection.query('select * from products LIMIT ?', limmit , (error, result) => {
        if(error) return reject(error);
        return resolve(result);
      });
    }
  )}
  get(id) {
    return new Promise((resolve, reject) => {
      this.connection.query('select * from products where id=?',id, (error, result) => {
        if(error) return reject(error);
        return resolve(result);
      })
    })
  }
  add(product) {
    return new Promise((resolve, reject) => {
      this.connection.query('insert into products set ?', product, (error, result) => {
        if(error) return reject(error);
        return resolve(result);
      });
    })
  }
  remove(id) {
    return new Promise((resolve, reject) => {
      this.connection.query('DELETE from products WHERE id = ?', id , (error, result) => {
        if(error) return reject(error);
        return resolve(result)
      });
    })
  }
  filterByCategory(category) {
    return new Promise((resolve, reject) => {
      if(category == 'asc') {
        this.connection.query('SELECT * FROM `products` ORDER BY `products`.`price` ASC', (error, result) => {
          if(error) return reject(error);
          return resolve(result);
        })
      }
      if(category == 'desc') {
        this.connection.query('SELECT * FROM `products` ORDER BY `products`.`price` DESC', (error, result) => {
          if(error) return reject(error);
          return resolve(result);
        })
      }
      this.connection.query('SELECT * FROM products WHERE category = ?', category, (error, result) => {
        if(error) return reject(error);
        return resolve(result);
      })
    })
  }

}

module.exports = () => ProductsDAO;