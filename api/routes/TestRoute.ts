import express from 'express';
import bodyParser from 'body-parser';
import Logger from 'js-logger';

import TestModel from '../models/testModel';

const router = express.Router();
const JSONParser = bodyParser.json();

router.get('/', (req, res) => {
  TestModel.find({}, (error, result) => {
    if (error) { Logger.error(error); }
    res.send(result);
  });
});

router.post('/new', JSONParser, (req, res) => {
  const newTest = new TestModel({
    name: req.body.name,
    age: req.body.age
  });
  newTest.save()
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => { Logger.error(error) });
});

export default router;
