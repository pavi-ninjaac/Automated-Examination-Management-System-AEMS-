import axios from 'axios';
import SessionValidity from '../constants/types/SessionValidity';

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

const signUp = (userDetails: NewUser) => {
  console.log(userDetails);
  let result = 'processing';
  async function sendRequest() {
    try {
      const response = await axios.post('/api/auth/register', userDetails);
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

const validateSession = (): SessionValidity => {
  if (!window.localStorage.getItem('stet-auth')) { return 'no-session' }
  const session: User = JSON.parse(window.localStorage.getItem('stet-auth') as string);
  let result: SessionValidity = 'waiting';
  const sendRequest = async () => {
    try {
      const validationResult = axios.get('/api/validate-token', {
        headers: { authorization: session.token }
      });
      result = 'valid';
    } catch (err) {
      result = 'invalid';
    }
  }
  sendRequest();
  return result;
}

const logout = (): void => {
  window.localStorage.removeItem('stet-user');
}

export default { signUp, login, validateSession };
