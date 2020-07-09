import axios from 'axios';

const login = (credentials: UserCredentials): AuthResult => {
  console.log(credentials);
  axios.post('/api/auth/signin', credentials)
    .then(response => {
      console.log(response);
      if (response.status === 401) {
        console.log(response.data);
        return 'no-user';
      }
      if (response.status === 200) {

      }
      return 'no-user';
    }).
    catch(err => {
      console.log(err);
    });
  return 'error';
}

export default login;
