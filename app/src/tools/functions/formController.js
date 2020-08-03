import axios from 'axios';

async function register(formData) {
  console.log(formData);
  if (!window.localStorage.getItem('stetUser')) { return 'no-session' }
  const session = JSON.parse(window.localStorage.getItem('stetUser'));
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
  reqBody.documents = {
    aadhaar: formData.documents_aadhaar,
    community: formData.documents_community,
    income: formData.documents_income,
    HSC: formData.documents_HSC,
    nativity: formData.documents_nativity,
    birth: formData.documents_birth,
    photograph: formData.documents_photograph,
    signature: formData.documents_signature,
  }
  reqBody.college = {
    degree: formData.college_degree,
    department: formData.college_department,
    institute: formData.college_institute,
    university: formData.college_university,
    address: formData.college_address,
    percentage: formData.college_percentage,
    dateOfPassing: formData.college_dateOfPassing
  }
  reqBody.additionalDetails = {
    isWorking: formData.isWorking || true,
    readRR: formData.readRR || true,
    readPP: formData.readPP || true,
  }
  additional.forEach(aa => {
    delete reqBody[aa];
  });
  console.log(reqBody);

  try {
    console.log('Sending request...', session);
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
  console.log(result);

  return result;
}

export default { register }
