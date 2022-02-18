import {create} from 'apisauce';

const apiClient = create({
  baseURL: 'https://interior-avenue-backend.herokuapp.com/api',
  headers: {'content-type': 'application/json'},
});

export default apiClient;
