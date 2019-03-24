const app = require('./config/custom-express');

const HOST = 'localhost';
const PORT = 3000;

app.listen(PORT, HOST, () => console.log(`Server is on at http://${HOST}:${PORT}`));
