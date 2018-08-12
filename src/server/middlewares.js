import join from 'server/middlewares/join';
import logger from 'server/middlewares/logger';
import nickname from 'server/middlewares/nickname';
import router from 'server/middlewares/router';
import server from 'server/middlewares/server';
import socket from 'server/middlewares/socket';

export default [
  ...logger,
  ...server,
  ...socket,
  ...router,
  ...nickname,
  ...join
];
