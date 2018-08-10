import loginView from 'client/middlewares/loginView';
import nickname from 'client/middlewares/nickname';
import socket from 'client/middlewares/socket';
import throttle from 'client/middlewares/throttle';

export default [...throttle, ...socket, ...nickname, ...loginView];
