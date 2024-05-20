import $api from '../http/';

export const authLogin = async (email, password) => {
  return $api.post('/login', { email, password });
};

export const authRegistration = async (email, password) => {
  return $api.post('/registration', { email, password });
};

export const authLogout = async () => {
  return $api.post('/logout');
};

export const authUsers = async () => {
  return $api.get('/users');
};
