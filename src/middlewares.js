import api from 'middlewares/api';
import nickname from 'middlewares/nickname';
import loginView from 'middlewares/loginView';

export default [...api, ...nickname, ...loginView];
