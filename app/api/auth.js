import client from './client';

const signup = (name, email, password, phone) =>
  client.post('/users/signup', {
    name: name,
    email: email,
    password: password,
    phone: phone,
  });

const login = (email, password) =>
  client.post('/user/signin', { email: email, password: password });

export default {
  login,
  signup,
};
