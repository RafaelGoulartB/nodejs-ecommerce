let app = require('./config/custom-express')();

let $HOST = 'localhost';
let $PORT = 8080;

app.listen($PORT, $HOST, () => console.log(`Server is on at http://${$HOST}:${$PORT}`));