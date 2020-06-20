import express from 'express';
import dotenv from 'dotenv';

import APIRouter from './api/router';
import APPRouter from './app';

dotenv.config();
const app = express();
const port = Number(process.env.PORT) || 3000;

app.use('/', APIRouter);
app.use('*', APPRouter);

app.listen(port, () => console.log(`Server started at port ${port}.`));
