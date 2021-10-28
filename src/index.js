const express = require('express');
const app = express();
const serverless = require('serverless-http');
require('dotenv').config();

app.get('/abc', (req, res) => {
  res.send('sucess github-lambda-deployment');
})

module.exports.execute = serverless(app);


app.listen(process.env.PORT || 3000);
console.log('app running on port : 3000');