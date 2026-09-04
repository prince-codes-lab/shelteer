require('dotenv').config({
    path:`${__dirname}/.env`
});
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  console.log(req.app)
  res.send('Hello, World!');
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});