import axios from 'axios';

async function getResults() {
  try {
    publish([{
      name: 'Krish',
      mark: 78
    }, {
      name: 'San',
      mark: 82
    }]
    );
    const results = (await axios.get('/api/results/all')).data;
    console.log(results);
    return results;
  } catch (error) {
    console.log(error);
    return 'error';
  }
}

async function publish(reqBody) {
  if (!window.localStorage.getItem('stetUser')) { return 'no-session' }
  const session = JSON.parse(window.localStorage.getItem('stetUser'));
  try {
    return (axios.post('/api/results/update', { results: reqBody }, {
      headers: { authorization: session.token }
    })).data;
  } catch (error) {
    console.log(error);
    return 'error';
  }
}

async function deleteResults() {
  if (!window.localStorage.getItem('stetUser')) { return 'no-session' }
  const session = JSON.parse(window.localStorage.getItem('stetUser'));
  try {
    return (axios.delete('/api/results/delete', {
      headers: { authorization: session.token }
    })).data;
  } catch (error) {
    console.log(error);
    return 'error';
  }
}

export default { getResults, publish, deleteResults }
