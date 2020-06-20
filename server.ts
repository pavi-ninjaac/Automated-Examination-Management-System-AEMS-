import express from 'express';
import dotenv from 'dotenv';
import Logger, { WARN, DEBUG } from 'js-logger';

import APIRouter from './api/router';
import APPRouter from './app';

dotenv.config();
const app = express();
const port = Number(process.env.PORT) || 3000;
Logger.useDefaults();

// Show all logs when in development, only Warnings and errors in production
Logger.setLevel(process.env.NODE_ENV === 'production' ? WARN : DEBUG);

app.use('/api', APIRouter);
app.use('*', APPRouter);

app.listen(port, () => Logger.info(`Server started at port ${port}.`));
