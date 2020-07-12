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
      }
      const userDetails: User = {
        name: response.data.name,
        token: response.data.accessToken
      }
      result = userDetails;
    }
    catch (err) {
      console.log(err);
      result = 'error';
    }
  }
  sendRequest();
  return result;
}

const signUp = (credentials: UserCredentials): AuthResult => {
  console.log(credentials);
  let result: AuthResult = 'processing';
  async function sendRequest() {
    try {
      const response = await axios.post('/api/auth/signin', credentials);
      console.log(response.data);
      if (response.data.status !== 200) {
        result = (response.data.message as AuthResult);
      }
      const userDetails: User = {
        name: response.data.name,
        token: response.data.accessToken
      }
      result = userDetails;
    }
    catch (err) {
      console.log(err);
      result = 'error';
    }
  }
  sendRequest();
  return result;
}

export default login;
