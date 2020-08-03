import Joi from '@hapi/joi';

const applicationValidationSchema = Joi.object({
  roll: Joi.string().min(3).max(30).required(),
  name: Joi.string().min(3).max(30).required(),
  fatherName: Joi.string().min(3).max(30).required(),
  motherName: Joi.string().min(3).max(30),
  spouseName: Joi.string().min(3).max(30),
  maritalStatus: Joi.string().min(9).max(12).required(),
  sex: Joi.string().required(),
  dateOfBirth: Joi.date().required(),
  placeOfBirth: Joi.string().min(3).max(55),
  native: Joi.string().min(3).max(55),
  religion: Joi.string(),
  caste: Joi.string(),
  nationality: Joi.string().min(5).max(10).required(),
  mobileNumber: Joi.number().integer().max(9999999999).min(5555555555),
  email: Joi.string().min(10).max(255).required()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'in'] } }),
  permanentAddress: Joi.string().min(10).max(255).required(),
  presentAddress: Joi.string().min(10).max(255),
  aadhaarNo: Joi.number().min(100000000000).max(999999999999).required(),
  voterId: Joi.string().required(),
  motherTongue: Joi.string().min(3).max(15).required(),
  knownLanguages: Joi.string(),
  isDisabled: Joi.boolean().required(),
  isCriminal: Joi.boolean().required(),
  isExServiceman: Joi.boolean().required(),
  identificationMarks: Joi.string().max(255).required(),
  SSLC: {
    institute: Joi.string().min(10).max(50).required(),
    address: Joi.string().min(10).max(255),
    percentage: Joi.number().min(50).max(100).required(),
    YearOfPassing: Joi.date().required(),
  },
  HSC: {
    institute: Joi.string().min(10).max(50).required(),
    address: Joi.string().min(10).max(255),
    percentage: Joi.number().min(50).max(100).required(),
    YearOfPassing: Joi.date().required(),
  },
  college: {
    degree: Joi.string().min(10).max(25).required(),
    department: Joi.string().min(10).max(35).required(),
    institute: Joi.string().min(30).max(40).required(),
    university: Joi.string().min(15).max(20).required(),
    address: Joi.string().min(30).max(40),
    percentage: Joi.number().min(2).max(6).required(),
    YearOfPassing: Joi.date().required()
  },
  documents: {
    aadhaar: Joi.string().required(),
    income: Joi.string().required(),
    nativity: Joi.boolean().required(),
    HSC: Joi.boolean().required(),
    community: Joi.string().required(),
    birth: Joi.string().required(),
    photograph: Joi.string().required(),
    signature: Joi.string().required(),
  },
  additional: { isWorking: Joi.boolean().required(), }
});

const validate = (application: Object): Promise<any> => applicationValidationSchema.validateAsync(application);

export default validate;
