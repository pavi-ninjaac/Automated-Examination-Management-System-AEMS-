import axios from 'axios';

async function getAll() {
  if (!window.localStorage.getItem('stetUser')) { return 'no-session' }
  const session = JSON.parse(window.localStorage.getItem('stetUser'));
  const allApplications = axios.get('/api/applications/all', {
    headers: { authorization: session.token }
  });

  console.log(allApplications);
}

export default { getAll }
