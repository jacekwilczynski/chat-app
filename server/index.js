import express from 'express';
import http from 'http';
import routes from 'routes';
import * as services from 'services';
import WebSocket from 'ws';

const app = express();

routes.forEach(({ method, url, controller }) => {
  app[method.toLocaleLowerCase()](url, controller(services));
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
