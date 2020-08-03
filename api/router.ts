import express from 'express';

import { auth, application, result } from './routes';

const router = express.Router();

router.use('/auth', auth);
router.use('/application', application);
router.use('/results', result);

router.get('*', (req, res) => {
  res.status(404).send('Unknown Request');
});

export default router;
