const express = require('express');
const app = express();
const cors = require('cors')
const connectDB = require('./db-configuration/Connect')
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT;
const authRouter = require('./routes/auth')
const productRouter = require('./routes/products')

connectDB()

app.use(express.json())

app.use(cors())

app.use('/', productRouter)
app.use('/', authRouter)

app.listen(port, () => {
  console.log(`Application is up and listening on port ${port}`);
});