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
    if (response.data.status === 201) {
      result = 'created';
      return result;
    }
    result = response.data.message;
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
    const validationResult = await axios.get('/api/validate-token', {
      headers: { authorization: session.token }
    });
    result = 'valid';
    return result;
  } catch (err) {
    result = 'invalid';
    return result;
  }
}

const logout = () => {
  window.localStorage.removeItem('stetUser');
}

export default { signUp, login, validateSession };
