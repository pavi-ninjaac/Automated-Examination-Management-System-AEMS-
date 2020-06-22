import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import Logger from 'js-logger';

dotenv.config();
const router = express.Router();

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test' || true) {
  // Set static folder
  const resultOfSettingStatic = router.use('/static', express.static(path.resolve(__dirname, 'client', 'build', 'static')));
  // console.log(`Static path: ${path.resolve(__dirname, 'client', 'build')}`, resultOfSettingStatic);

  // Serve the frontend
  router.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
} else {
  // Fallback for development environment
  router.get('*', (req, res) => {
    Logger.debug(`Static path: ${path.resolve(__dirname, 'client', 'build', 'static')}`);
    res.send('Hello from APP.');
    Logger.debug('Invalid route');
  });
}

export default router;
