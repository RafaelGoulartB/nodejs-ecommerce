require('dotenv').config()
const app = require('./config/custom-express');

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Server is on at http://localhost:${PORT}`));
