import express from 'express';
import dotenv from 'dotenv';
import Logger from 'js-logger';
import cors from 'cors';

import APIRouter from './api/router';
import APPRouter from './app';

dotenv.config();
const app = express();
const port = Number(process.env.PORT) || 3000;
Logger.useDefaults();

// Show all logs when in development, only Warnings and errors in production
Logger.setLevel(process.env.NODE_ENV === 'production' ? Logger.WARN : Logger.DEBUG);

app.use(cors());
app.use('/api', APIRouter);
app.use('/', APPRouter);

app.listen(port, () => Logger.info(`Server started at port ${port}.`));