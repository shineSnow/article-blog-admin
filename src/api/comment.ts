import request from '../utils/request';

export const fetchPageBg = () => {
  return request.get('http://img.xjh.me/random_img.php');
};
