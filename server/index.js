import * as serverActions from 'actions/server';
import configureStore from 'configureStore';
import WebSocket from 'ws';

const server = new WebSocket.Server({
  port: process.env.PORT || 5000
});

const { dispatch } = configureStore();

server.on('listening', () => {
  dispatch(serverActions.listening({ port: server.address().port }));
});

server.on('connection', (socket, request) => {
  dispatch(serverActions.connection({ socket, request }));
});
