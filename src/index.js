const express = require('express');
const app = express();
const serverless = require('serverless-http');
require('dotenv').config();

app.get('/test', (req, res) => {
  res.send('sucess github-lambda-deployment');
})
app.get('/any', (req, res) => {
  res.send('any github-lambda-deployment');
})

app.get('/error', (req, res) => {
  res.send('any github-lambda-deployment');
})
module.exports.execute = serverless(app);


app.listen(process.env.PORT || 3000);
console.log('app running on port : 3000');