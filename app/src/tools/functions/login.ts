import axios from 'axios';

const login = (credentials: UserCredentials): AuthResult => {
  console.log(credentials);
  let result: AuthResult = 'processing';
  async function ano() {
    await axios.post('/api/auth/signin', credentials)
      .then(response => {
        console.log(response.data);
        if (response.data.status === 401) {
          result = (response.data.message as AuthResult);
        }
        const userDetails: User = {
          name: response.data.name,
          token: response.data.accessToken
        }
        result = userDetails;
      }).
      catch(err => {
        console.log(err);
        result = 'error';
      });
  }
  ano();
  return result;
}

export default login;
