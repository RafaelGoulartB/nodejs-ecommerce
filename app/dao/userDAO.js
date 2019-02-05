class User {
  constructor(connection) {
    this.connection = connection;
  }

  add(user) {
    return new Promise((resolve, reject) => {
      this.connection.query(`insert into users set ?`, user , (err, result) => {
        if(err) return reject(err);
        return resolve(result);
      });
    })
  }
  remove(id) {}
  get(id) {}
  log_in(email, pass) {}

}

module.exports = () => User;