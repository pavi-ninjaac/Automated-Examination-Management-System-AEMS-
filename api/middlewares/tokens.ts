import jwt from 'jsonwebtoken';
import Logger from 'js-logger';

import { UserInterface, UserPayload } from '../models/User';

interface JWTValidationResult {
  status: number;
  message?: string;
  user?: object;
}

const issuer = '@KrishnaMoorthy12'

const generateAccessToken = ({ _id: id, email, type, isVerified }: UserInterface): string =>
  jwt.sign({ id, email, type, isVerified } as UserPayload, (process.env.ACCESS_TOKEN_SECRET as string), { expiresIn: '1h', issuer });

const generateRefreshToken = ({ _id: id, email, type, isVerified }: UserInterface): string =>
  jwt.sign({ id, email, type, isVerified } as UserPayload, (process.env.REFRESH_TOKEN_SECRET as string), { expiresIn: '1d', issuer });

const validateToken = (authHeader: any): JWTValidationResult => {
  Logger.debug('Validating token...');
  const token = (authHeader && authHeader.split(' ')[1]) || authHeader;
  Logger.debug(token);
  if (token == null) { return { status: 401, message: 'access token is not found' } }

  let result: JWTValidationResult = { status: 500, message: 'error validating token' };
  jwt.verify(token, (process.env.ACCESS_TOKEN_SECRET as string), (err: any, deserializedInfo: any) => {
    Logger.debug('Verifying token...');
    if (err) { return (result = { status: 403, message: 'invalid or expired access token' }); }
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
