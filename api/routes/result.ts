import express from 'express';
import Logger from 'js-logger';

import Result from '../models/Result';

import verifyAuth from '../middlewares/verifyAuth';

const router = express.Router();

router.get('/all', async (req: express.Request, res: express.Response) => {
  Logger.debug('>Fetching Results');
  Result.find({}, { __v: 0 })
    .then((results) => {
      Logger.debug(results);
      return res.status(200).send(results);
    })
    .catch((err) => {
      Logger.debug(err);
      return res.status(500).send('error retrieving results');
    });
});

router.post('/update', verifyAuth, async (req: any, res: express.Response) => {
  Logger.debug('>Posting Results');
  Logger.debug(req.body.results);
  if (req.user.type !== 'admin') {
    return res.status(401).send('You don\'t have enough privileges to access this route');
  } try {
    await Result.deleteMany({});
    await Result.insertMany(req.body.results);
    return res.status(200).send('Results published successfully');
  } catch (err) {
    Logger.debug(err);
    return res.status(500).send('Error publishing result');
  }
});

router.delete('/delete', verifyAuth, async (req: any, res: express.Response) => {
  Logger.debug('>Deleting Results');
  if (req.user.type !== 'admin') {
    return res.status(401).send('You don\'t have enough privileges to access this route');
  } try {
    await Result.deleteMany({});
    return res.status(200).send('Results deleted successfully');
  } catch (err) {
    Logger.debug(err);
    return res.status(500).send('Error deleted results');
  }
});

export default router;
