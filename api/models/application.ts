import mongoose, { Schema, Document } from 'mongoose';

const applicationSchema = new Schema({
  _user: { type: mongoose.Types.ObjectId, required: true },

  name: { type: String, trim: true, required: true },
  fatherName: { type: String, trim: true, required: true },
  motherName: { type: String, trim: true },
  spouseName: { type: String, trim: true },
  maritalStatus: { type: Boolean },
  sex: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  placeOfBirth: { type: String },
  native: { type: String },
  religion: { type: String },
  caste: { type: String },
  nationality: { type: String, required: true },

  mobileNumber: { type: Number, required: true },
  email: { type: String, trim: true, required: true },

  permanentAddress: { type: String, required: true },
  presentAddress: { type: String },

  aadhaarNo: { type: Number, min: 100000000000, required: true },
  voterId: { type: String, required: true },

  motherTongue: { type: String, required: true },
  knownLanguages: { type: String },

  isDisabled: { type: Boolean, default: false },
  isCriminal: { type: Boolean, default: false },
  isExServiceMan: { type: Boolean, default: false },

  identificationMarks: { type: String, required: true },

  maxQualification: { type: String, required: true },
  SSLC: {
    institute: { type: String, trim: true, required: true },
    address: { type: String, trim: true },
    percentage: { type: Number, min: 50, max: 100, required: true },
    dateOfPassing: { type: Date, required: true }
  },

  HSC: {
    institute: { type: String, trim: true, required: true },
    address: { type: String, trim: true },
    percentage: { type: Number, min: 50, max: 100, required: true },
    dateOfPassing: { type: Date, required: true }
  },

  college: {
    degree: { type: String, trim: true, required: true },
    department: { type: String, trim: true, required: true },
    institute: { type: String, trim: true, required: true },
    university: { type: String, trim: true, required: true },
    address: { type: String, trim: true },
    percentage: { type: Number, min: 50, max: 100, required: true },
    dateOfPassing: { type: Date, required: true }
  },

  documents: {
    aadhaar: { type: String, required: true },
    voter: { type: String, required: true },
    SSLC: { type: String, required: true },
    HSC: { type: String, required: true },
    deg: { type: String, required: true },
    photo: { type: String, required: true },
    signature: { type: String, required: true }
  },

  additionalDetails: {
    isWorking: { type: Boolean, required: true, default: false },
    readRR: { type: Boolean, required: true, default: true },
    readPP: { type: Boolean, required: true, default: true },
  }
}, {
  timestamps: true
});

const Application = mongoose.model('Application', applicationSchema);

export default Application;
