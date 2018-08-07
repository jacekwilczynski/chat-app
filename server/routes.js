import * as nickname from 'controllers/nickname';

export default [
  {
    method: 'GET',
    url: '/api/nickname/check/:nickname?',
    controller: nickname.check
  }
];
