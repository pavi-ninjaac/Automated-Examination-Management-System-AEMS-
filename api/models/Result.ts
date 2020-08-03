import mongoose, { Schema } from 'mongoose';

const ResultsSchema = new Schema({
  name: { type: String, trim: true, minlength: 3, maxlength: 30, required: true },
  mark: { type: Number }
}, {
  timestamps: true
});

const Result = mongoose.model('Result', ResultsSchema);

export default Result;
