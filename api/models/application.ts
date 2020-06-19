import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const applicationSchema = new Schema({
  name: { type: String, required: true },
  fatherName: { type: String, required: true },
  motherName: { type: String },
  spouseName: { type: String },
  maritalStatus: { type: Boolean },
  sex: { type: String },
  dateOfBirth: { type: Date },
  placeOfBirth: { type: String },
  native: { type: String },
  religion: { type: String },
  caste: { type: String },
  nationality: { type: String },

  mobileNumber: { type: Number },
  email: { type: String },

  permanentAddress: { type: String },
  presentAddress: { type: String },

  aadhaarNo: { type: String },
  voterId: { type: String },

  motherTongue: { type: String },
  knownLanguages: { type: String },
});
