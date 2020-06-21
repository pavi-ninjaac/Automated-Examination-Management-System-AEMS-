import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import Logger from 'js-logger';

dotenv.config();
const router = express.Router();

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  router.use(express.static(path.resolve(__dirname, 'client', 'build')));

  // Serve the frontend
  router.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
} else {
  // Fallback for development environment
  router.get('*', (req, res) => {
    res.send('Hello from APP.');
    Logger.debug('Invalid route');
  });
}

export default router;
