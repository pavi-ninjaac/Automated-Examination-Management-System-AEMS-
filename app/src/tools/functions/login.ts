import axios from 'axios';

const login = (credentials: UserCredentials) => {
  axios.get('/api/auth/signin', { data: credentials })
    .then(response => {
      console.log(response);
    }).
    catch(err => {
      console.log(err);
    });
}
