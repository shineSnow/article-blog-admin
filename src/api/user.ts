import request from '../utils/request';

type LoginParams = {
  username: string;
  password: string;
};
type UserIdParam = {
  userId: number | string;
};
/**
 *
 * @param params login
 * @returns
 */
export const login = (params: LoginParams) => {
  return request.post('/login', params);
};

export const geUserInfo = () => {
  return request.get('/system/user/getUserInfo');
};
