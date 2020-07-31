import axios from 'axios';

async function getAll() {
  if (!window.localStorage.getItem('stetUser')) { return 'no-session' }
  const session = JSON.parse(window.localStorage.getItem('stetUser'));
  try {
    const allApplications = await axios.get('/api/application/all', {
      headers: { authorization: session.token }
    });
    console.log(allApplications);
    return allApplications.data;
  } catch (err) {
    return err;
  }
}

export default { getAll }
