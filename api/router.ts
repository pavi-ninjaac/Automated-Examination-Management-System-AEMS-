import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Logger from 'js-logger';

import auth from './routes/auth';

dotenv.config();
const router = express.Router();

mongoose.connect((process.env.DB_URL as string), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', (): void => {
  Logger.info('Connection established to mongo db.');
});

router.use('/auth', auth);

router.get('/', (req, res) => {
  res.send('Hello kitty!')
});

export default router;
