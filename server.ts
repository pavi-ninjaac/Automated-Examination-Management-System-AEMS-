import express from 'express';
import dotenv from 'dotenv';
import Logger from 'js-logger';
import cors from 'cors';

import * as MongooseConnectivityMediator from './api/MongooseConnectivityMediator';
import APIRouter from './api/router';
import APPRouter from './app/app';

dotenv.config();
const app = express();
const port = Number(process.env.PORT) || 3000;
Logger.useDefaults();

// Show all logs when in development, only Warnings and errors in production
Logger.setLevel(process.env.NODE_ENV === 'production' ? Logger.ERROR : Logger.DEBUG);

app.use(cors());
app.use('/api', APIRouter);
app.use('/', APPRouter);

// Connect to mongoose, then start server only if connection is successful
MongooseConnectivityMediator
  .connect()
  .then(() => {
    app.listen(port, (): void => {
      Logger.info(`Server started at port ${port}.`);
      MongooseConnectivityMediator.connectionStatus();
    });
  })
  .catch(err => Logger.error('Error connecting to DB, server not started.', err));
