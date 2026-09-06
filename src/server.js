require('dotenv').config({
    path:`${__dirname}/.env`
});
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const authRoute = require('./router/authRouter')

// Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.use('/api/v1/', authRoute)

// Sample route
app.get('/', (req, res) => {
  console.log(req.app)
  res.send('Hello, World!');
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});