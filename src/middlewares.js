import api from 'middlewares/api';
import nickname from 'middlewares/nickname';
import user from 'middlewares/user';
import loginView from 'middlewares/loginView';
import throttle from 'middlewares/throttle';

export default [...throttle, ...api, ...nickname, ...user, ...loginView];
