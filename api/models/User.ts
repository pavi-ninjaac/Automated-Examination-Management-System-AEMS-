import mongoose, { Schema, Document } from 'mongoose';

export interface UserInterface extends Document {
  name: string;
  email: string;
  phone: number;
  password: string;
}

const UserSchema = new Schema({
  name: { type: String, trim: true, minlength: 3, required: true },
  email: { type: String, trim: true, minlength: 10, unique: true, required: true },
  phone: { type: Number, trim: true, minlength: 10, maxlength: 10, min: 5555555555, max: 9999999999 },
  password: { type: String, required: true }
});

const User = mongoose.model<UserInterface>('User', UserSchema);

export default User;
