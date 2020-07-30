import axios from 'axios';

function register(formData) {
  /*
  console.log(formData);
  if (!window.localStorage.getItem('stet-auth')) { return 'no-session' }
  const session = JSON.parse(window.localStorage.getItem('stet-auth') as string);
  let result = 'waiting';
  let reqBody = formData;
  const additional = [
    'SSLC_institute',
    'SSLC_address',
    'SSLC_percentage',
    'SSLC_dateOfPassing',
    'HSC_institute',
    'HSC_address',
    'HSC_percentage',
    'HSC_dateOfPassing',
    'college_degree',
    'college_department',
    'college_institute',
    'college_university',
    'college_address',
    'college_percentage',
    'college_dateOfPassing',
    'documents_aadhaar',
    'documents_voter',
    'documents_SSLC',
    'documents_HSC',
    'documents_deg',
    'documents_photo',
    'documents_signature'
  ]
  additional.forEach(aa => {
    delete reqBody[aa];
  });
  reqBody.SSLC = {
    institute: formData.SSLC_institute,
    address: formData.SSLC_address,
    percentage: formData.SSLC_percentage,
    dateOfPassing: formData.SSLC_dateOfPassing
  }
  reqBody.HSC = {
    institute: formData.HSC_institute,
    address: formData.HSC_address,
    percentage: formData.HSC_percentage,
    dateOfPassing: formData.HSC_dateOfPassing
  }
  reqBody.college = {
    voter: formData.documents_voter,
    SSLC: formData.documents_SSLC,
    HSC: formData.documents_HSC,
    deg: formData.documents_deg,
    photo: formData.documents_photo,
    signature: formData.documents_signature
  }
  reqBody.documents = {
    degree: formData.college_degree,
    department: formData.college_department,
    institute: formData.college_institute,
    university: formData.college_university,
    address: formData.college_address,
    percentage: formData.college_percentage,
    dateOfPassing: formData.college_dateOfPassing
  }

  const sendRequest = async () => {
    try {
      const response = await axios.post('/api/application/new', reqBody, {
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
  */

  // return 'ok';
}

export default { register }