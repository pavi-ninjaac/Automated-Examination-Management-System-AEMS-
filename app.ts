import express from 'express';
import path from 'path';

const router = express.Router();

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  router.use(express.static(path.join(__dirname, 'client', 'build')));

  router.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
} else {
  router.get('*', (req, res) => {
    res.send('Hello from APP.');
  });
}

export default router;
