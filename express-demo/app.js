import express from 'express'
import mountMiddleware from './middleware/index.js';
import mountRouters from './routes/index.js';
// import test_mysql from './tests/mysql.js'

const PORT = 3000
const app = express();

mountMiddleware(app);
mountRouters(app)

// test_mysql();

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})