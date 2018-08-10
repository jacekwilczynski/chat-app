import logger from 'server/middlewares/logger';
import nickname from 'server/middlewares/nickname';
import server from 'server/middlewares/server';

export default [...logger, ...server, ...nickname];
