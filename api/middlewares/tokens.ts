import jwt from 'jsonwebtoken';
import Logger from 'js-logger';

import { UserInterface } from '../models/User';

interface JWTValidationResult {
  status: number;
  message?: string;
  user?: object
}

const generateAccessToken = ({ _id, email }: UserInterface): string => jwt.sign({
  id: _id,
  email: email
}, (process.env.ACCESS_TOKEN_SECRET as string), { expiresIn: '30m' });

const generateRefreshToken = ({ _id, email }: UserInterface): string => jwt.sign({
  id: _id,
  email: email
}, (process.env.REFRESH_TOKEN_SECRET as string), { expiresIn: '1d' });

const validateToken = (authHeader: any): JWTValidationResult => {
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) { return { status: 401, message: 'access token is not found' } }

  let result: JWTValidationResult = { status: 500, message: 'error validating token' };
  jwt.verify(token, (process.env.ACCESS_TOKEN_SECRET as string), (err: any, deserializedInfo: any) => {
    Logger.debug('Verifying token...');
    if (err) { return (result = { status: 403, message: 'invalid or expired access token' }) }
    return (result = { status: 200, user: deserializedInfo });
  });
  return result;
}

export {
  generateAccessToken,
  generateRefreshToken,
  validateToken,
  JWTValidationResult
};
