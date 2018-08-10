import logger from 'middlewares/logger';
import nickname from 'middlewares/nickname';
import server from 'middlewares/server';

export default [...logger, ...server, ...nickname];
