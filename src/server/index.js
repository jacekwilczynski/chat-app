const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const app = express();

const users = ['Eric'];

const nicknameAvailable = nickname => !users.includes(nickname);

app.get('/api/check-nickname/:nickname?', (req, res) => {
  res.send(nicknameAvailable(req.params.nickname));
});

const server = http.createServer(app);

const webSocketServer = new WebSocket.Server({ server });

webSocketServer.on('connection', ws => {
  ws.on('message', json => {
    const message = JSON.parse(json);
    if (message.type === 'JOIN_REQUEST') {
      ws.send(
        JSON.stringify({
          type: nicknameAvailable(message.payload.nickname)
            ? 'JOIN_ACCEPT'
            : 'JOIN_REJECT',
          payload: message.payload
        })
      );
    }
  });
});

server.listen(process.env.PORT || 5000);
