import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TestSchema = new Schema({
  name: String,
  age: Number
});

export default mongoose.model('TestSchema', TestSchema);
