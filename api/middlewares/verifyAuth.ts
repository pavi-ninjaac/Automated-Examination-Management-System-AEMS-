import express from 'express';
import { validateToken, JWTValidationResult } from './tokens';

const verify = (req: express.Request | any, res: express.Response, next: express.NextFunction) => {
  if (req.user) { next(); }
  const authHeader = req.headers['authorization'];
  const verificationResult: JWTValidationResult = validateToken(authHeader);

  if (verificationResult.status !== 200) {
    return res.status(200).json({ code: verificationResult.status, message: verificationResult.message });
  }
  req.user = verificationResult.user;
  next();
}

export default verify;
