import express from 'express';

import { auth, application } from './routes';

const router = express.Router();

router.use('/auth', auth);
router.use('/application', application);

router.get('*', (req, res) => {
  res.send('Hello kitty!')
});

export default router;
