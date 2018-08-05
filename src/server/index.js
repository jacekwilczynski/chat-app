const express = require('express');
const app = express();

const users = ['Eric'];

app.get('/api/check-nickname/:value?', (req, res) => {
  res.send(!users.includes(req.params.value));
});

app.listen(process.env.PORT || 5000);
