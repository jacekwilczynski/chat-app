const express = require('express');
const http = require('http');
const ws = require('ws');
const app = express();

const users = ['Eric'];

app.get('/api/check-nickname/:value?', (req, res) => {
  res.send(!users.includes(req.params.value));
});

const server = http.createServer(app);

const socket = new ws.Server({ server });

server.listen(process.env.PORT || 5000);
