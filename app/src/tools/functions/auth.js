import axios from 'axios';

const login = async (credentials) => {
  console.log(credentials);
  let result = 'processing';
  try {
    const response = await axios.post('/api/auth/signin', credentials);
    console.log(response.data);
    if (response.data.status === 401) {
      result = (response.data.message);
      return result;
    }
    const userDetails = {
      name: response.data.name,
      token: response.data.accessToken
    }
    result = userDetails;
    window.localStorage.setItem('stetUser', JSON.stringify(result));
    return result;
  }
  catch (err) {
    console.log(err);
    result = 'error';
    return result;
  }
}

const signUp = async (userDetails) => {
  console.log(userDetails);
  let result = 'processing';
  try {
    const response = await axios.post('/api/auth/register', userDetails);
    console.log(response.data);
    result = response.data;
    return result;
  }
  catch (err) {
    console.log(err);
    result = 'error';
    return result;
  }
}

const validateSession = async () => {
  if (!window.localStorage.getItem('stetUser')) { return 'no-session' }
  const session = JSON.parse(window.localStorage.getItem('stetUser'));
  let result = 'waiting';
  try {
    const validationResult = await axios.get('/api/auth/validate-token', {
      headers: { authorization: session.token }
    });
    result = validationResult;
    return result;
  } catch (err) {
    result = 'invalid';
    return result;
  }
}

const sendVerificationEmail = async () => {
  if (!window.localStorage.getItem('stetUser')) { return 'no-session' }
  const session = JSON.parse(window.localStorage.getItem('stetUser'));
  let result = 'processing';
  try {
    const verification = await axios.get('/api/auth/verify/send/', {
      headers: { authorization: session.token }
    });
    result = verification;
    return result;
  } catch (err) {
    result = 'invalid';
    return result;
  }
}

const logout = () => {
  console.log('Logging out...');
  window.localStorage.removeItem('stetUser');
}

export default { signUp, login, validateSession, sendVerificationEmail, logout };
