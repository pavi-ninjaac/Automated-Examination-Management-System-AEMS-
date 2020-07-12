import axios from 'axios';

const login = (credentials: UserCredentials): AuthResult => {
  console.log(credentials);
  let result: AuthResult = 'processing';
  async function sendRequest() {
    try {
      const response = await axios.post('/api/auth/signin', credentials);
      console.log(response.data);
      if (response.data.status === 401) {
        result = (response.data.message as AuthResult);
        return;
      }
      const userDetails: User = {
        name: response.data.name,
        token: response.data.accessToken
      }
      result = userDetails;
      window.localStorage.setItem('stet-user', JSON.stringify(result));
    }
    catch (err) {
      console.log(err);
      result = 'error';
    }
  }
  sendRequest();
  return result;
}

const signUp = (credentials: UserCredentials) => {
  console.log(credentials);
  let result = 'processing';
  async function sendRequest() {
    try {
      const response = await axios.get('/api/auth/register');
      console.log(response.data);
      if (response.data.status === 201) {
        result = 'created'; return;
      }
      result = response.data.message;
    }
    catch (err) {
      console.log(err);
      result = 'error';
    }
  }
  sendRequest();
  return result;
}

export default { signUp, login };
