import axios from 'axios';

async function getAll() {
  const allApplications = axios.get('/api/applications/all', {
    headers: { authorization: session.token }
  });

  console.log(allApplications);
}
