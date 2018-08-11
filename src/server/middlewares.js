import client from 'server/middlewares/client';
import join from 'server/middlewares/join';
import logger from 'server/middlewares/logger';
import nickname from 'server/middlewares/nickname';
import router from 'server/middlewares/router';
import server from 'server/middlewares/server';

export default [
  ...logger,
  ...server,
  ...client,
  ...router,
  ...nickname,
  ...join
];
