import mongoose, { Schema, Document } from 'mongoose';

interface UserInterface extends Document {
  name: string;
  email: string;
  phone: number;
  password: string;
  type?: string;
  isVerified?: boolean;
}

interface UserPayload {
  id: string;
  email: string;
  type: string;
  isVerified: boolean;
}

const UserSchema = new Schema({
  name: { type: String, trim: true, minlength: 3, maxlength: 30, required: true },
  email: { type: String, trim: true, minlength: 10, maxlength: 255, unique: true, required: true },
  phone: { type: Number, trim: true, minlength: 10, maxlength: 10, min: 5555555555, max: 9999999999 },
  password: { type: String, minlength: 6, maxlength: 1024, required: true },
  type: { type: String, required: true, default: 'applicant' },
  isVerified: { type: Boolean, default: false, required: true }
}, {
  timestamps: true
});

const User = mongoose.model<UserInterface>('User', UserSchema);

export default User;
export { UserInterface, UserPayload }
