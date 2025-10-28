// server.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello from Codespaces!</h1><p>Email: <a href="mailto:24f3001764@ds.study.iitm.ac.in">24f3001764@ds.study.iitm.ac.in</a></p>');
});

app.listen(8000);
// Run with: node server.js