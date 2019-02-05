class ProductsDAO {

  constructor(connection) {
    this.connection = connection;
  }

  listAll() {
    return new Promise((resolve, reject) => {
      this.connection.query('select * from products', (error, result) => {
        if(error) return reject(error);
        return resolve(result);
      })
    });
  }
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
      this.connection.query('SELECT * FROM products WHERE category = ?', category, (error, result) => {
        if(error) return reject(error);
        return resolve(result);
      })
    })
  }

}

module.exports = () => ProductsDAO;