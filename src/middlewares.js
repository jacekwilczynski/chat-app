import loginView from 'middlewares/loginView';
import nickname from 'middlewares/nickname';
import socket from 'middlewares/socket';
import throttle from 'middlewares/throttle';
import user from 'middlewares/user';

export default [...throttle, ...socket, ...nickname, ...user, ...loginView];
