import throttle from 'middlewares/throttle';
import api from 'middlewares/api';
import socket from 'middlewares/socket';
import nickname from 'middlewares/nickname';
import user from 'middlewares/user';
import loginView from 'middlewares/loginView';

export default [
  ...throttle,
  ...api,
  ...socket,
  ...nickname,
  ...user,
  ...loginView
];
