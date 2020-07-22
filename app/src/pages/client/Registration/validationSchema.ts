import * as Yup from 'yup';

export default Yup.object({
  name: Yup.string().min(3).max(30).required(),
  fatherName: Yup.string().min(3).max(30).required(),
  motherName: Yup.string().min(3).max(30),
  spouseName: Yup.string().min(3).max(30),
  maritalStatus: Yup.string().min(1).max(12).required(),
  sex: Yup.string().required(),
  dateOfBirth: Yup.date().required(),
  placeOfBirth: Yup.string().min(3).max(55),
  native: Yup.string().min(3).max(55),
  religion: Yup.string(),
  caste: Yup.string(),
  nationality: Yup.string().min(5).max(10).required(),
  mobileNumber: Yup.number().integer().max(9999999999).min(5555555555),
  email: Yup.string().email().required(),
  permanentAddress: Yup.string().min(5).max(255).required(),
  presentAddress: Yup.string().min(5).max(255),
  aadhaarNo: Yup.number().required(),
  voterId: Yup.string().required(),
  motherTongue: Yup.string().min(3).max(15).required(),
  knownLanguages: Yup.string(),
  isDisabled: Yup.boolean().required(),
  isCriminal: Yup.boolean().required(),
  isExServiceman: Yup.boolean().required(),
  identificationMarks: Yup.string().max(255).required(),

  SSLC_institute: Yup.string().min(4).max(50).required(),
  SSLC_address: Yup.string().min(4).max(255),
  SSLC_percentage: Yup.number().min(50).max(100).required(),
  SSLC_YearOfPassing: Yup.string().required(),

  HSC_institute: Yup.string().min(4).max(50).required(),
  HSC_address: Yup.string().min(4).max(255),
  HSC_percentage: Yup.number().min(50).max(100).required(),
  HSC_YearOfPassing: Yup.string().required(),

  college_degree: Yup.string().min(4).max(25).required(),
  college_department: Yup.string().min(4).max(35).required(),
  college_institute: Yup.string().min(4).max(40).required(),
  college_university: Yup.string().min(4).max(20).required(),
  college_address: Yup.string().min(5).max(40),
  college_percentage: Yup.number().min(30).max(100).required(),
  college_YearOfPassing: Yup.string().required(),

  documents_aadhaar: Yup.string().required(),
  documents_voter: Yup.string().required(),
  documents_SSLC: Yup.string().required(),
  documents_HSC: Yup.string().required(),
  documents_deg: Yup.string().required(),
  documents_photo: Yup.string().required(),
  documents_signature: Yup.string().required()
});