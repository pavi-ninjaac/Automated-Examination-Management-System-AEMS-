import express from 'express';
import mongoose from 'mongoose';

import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = Number(process.env.PORT) || 3000;

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


app.get('/', (req, res) => res.send('Hello World!'));

// app.use('api/routes/auth');

app.listen(port, () => console.log(`Server started at port ${port}.`));
