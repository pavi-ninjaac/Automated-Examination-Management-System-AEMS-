import express from 'express';
import { validateToken, JWTValidationResult } from './tokens';
import Logger from 'js-logger';

const verify = (req: express.Request | any, res: express.Response, next: express.NextFunction) => {
  Logger.debug('Checking auth...');
  if (req.user) { next(); }
  const authHeader = req.headers['authorization'];
  Logger.debug(authHeader);
  const verificationResult: JWTValidationResult = validateToken(authHeader);
  Logger.debug(verificationResult);

  if (verificationResult.status !== 200) {
    return res.status(200).json({ code: verificationResult.status, message: verificationResult.message });
  }
  req.user = verificationResult.user;
  next();
}

export default verify;
