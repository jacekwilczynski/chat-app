import loginView from 'client/middlewares/loginView';
import nickname from 'client/middlewares/nickname';
import socket from 'client/middlewares/socket';
import user from 'client/middlewares/user';

export default [...socket, ...nickname, ...user, ...loginView];
