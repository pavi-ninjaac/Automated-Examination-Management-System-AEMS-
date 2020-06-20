import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const router = express.Router();
dotenv.config();

mongoose.connect((process.env.DB_URL as string), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.info('Connection established to mongo db.')
});

router.get('/hello', (req, res) => {
  res.send('Hello kitty!')
});

export default router;
