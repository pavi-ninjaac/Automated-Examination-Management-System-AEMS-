import express from 'express';
import jwt from 'jsonwebtoken';

import { UserInterface } from '../models/User';

const generateAccessToken = ({ _id, email }: UserInterface): string => jwt.sign({
  id: _id,
  email: email
}, (process.env.ACCESS_TOKEN_SECRET as string), { expiresIn: '30m' });

const generateRefreshToken = ({ _id, email }: UserInterface): string => jwt.sign({
  id: _id,
  email: email
}, (process.env.REFRESH_TOKEN_SECRET as string), { expiresIn: '1d' });

const validateToken = (req: express.Request | any, res: express.Response, next: express.NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) { return res.status(401).json({ message: 'access token is not found' }); }

  jwt.verify(token, (process.env.ACCESS_TOKEN_SECRET as string), (err: any, deserializedInfo: any) => {
    if (err) { return res.status(403).json({ message: 'invalid or expired access token' }); }
    req.user = deserializedInfo;
    next();
  });
}

export {
  generateAccessToken,
  generateRefreshToken,
  validateToken
};
