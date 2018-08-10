import user from 'client/middlewares/join';
import loginView from 'client/middlewares/loginView';
import nickname from 'client/middlewares/nickname';
import socket from 'client/middlewares/socket';

export default [...socket, ...nickname, ...user, ...loginView];
