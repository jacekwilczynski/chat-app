import { get } from 'axios';

export const checkNickname = nickname =>
  get(`/api/check-nickname/${nickname}`).then(res => res.data);
