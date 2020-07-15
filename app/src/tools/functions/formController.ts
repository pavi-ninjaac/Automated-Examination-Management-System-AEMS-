import axios from 'axios';

function register(formData: object) {
  if (!window.localStorage.getItem('stet-auth')) { return 'no-session' }
  const session: User = JSON.parse(window.localStorage.getItem('stet-auth') as string);
  let result = 'waiting';
  const sendRequest = async () => {
    try {
      const response = await axios.post('/api/application/new', formData, {
        headers: { authorization: session.token }
      });
      if (response.data.code !== 200) {
        result = response.data.message;
      }
      result = 'submitted';
    } catch (error) {
      console.error.bind(error);
      result = 'error';
    }
  }
  sendRequest();

  return result;
}

export { register }
