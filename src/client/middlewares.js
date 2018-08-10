import loginView from 'client/middlewares/loginView';
import nickname from 'client/middlewares/nickname';
import socket from 'client/middlewares/socket';
import throttle from 'client/middlewares/throttle';
import user from 'client/middlewares/user';

export default [...throttle, ...socket, ...nickname, ...user, ...loginView];
