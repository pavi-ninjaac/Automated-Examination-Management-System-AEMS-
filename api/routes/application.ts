import express from 'express';
import Logger from 'js-logger';

import Application from '../models/Application';
import verifyAuth from '../middlewares/verifyAuth';

const router = express.Router();
const JSONParser = express.json();

/* List of all applications */
router.get('/', async (req: express.Request | any, res: express.Response) => {
  try {
    Logger.debug('> Requesting list of application...');
    const applications = await Application.find({}, { __v: 0 });
    if (!applications || applications.length === 0) { return res.status(204).json({ message: 'no applications found' }); }
    return res.status(203).send(applications);
  } catch (err) {
    Logger.error(err);
    return res.status(500).json({ message: 'could not process request', err });
  }
});

/* New application */
router.post('/new', JSONParser, verifyAuth, async (req: express.Request | any, res: express.Response) => {
  try {
    Logger.debug('> Requesting new application submission...');
    if (typeof req.body.dateOfBirth === 'string') {
      req.body.SSLC.dateOfPassing = new Date(req.body.SSLC.dateOfPassing);
      req.body.HSC.dateOfPassing = new Date(req.body.HSC.dateOfPassing);
      req.body.college.dateOfPassing = new Date(req.body.college.dateOfPassing);
    }
    const application = new Application({ _user: req.user.id, ...req.body });
    const regRes = application.save();
    if (!regRes) { throw new Error('error posting application'); }
    return res.status(200).json({ message: 'application submitted successfully.' });
  } catch (err) {
    Logger.error(err);
    return res.status(500).json({ message: 'could not process request', err });
  }
});

/* Update application */
router.post('/update', JSONParser, verifyAuth, async (req: express.Request | any, res: express.Response) => {
  try {
    Logger.debug('> Requesting application updation...');
    const updateResult = await Application.findOneAndUpdate({ _user: req.user.id }, req.body);
    if (!updateResult) { throw new Error('error updating application'); }
    return res.status(200).json({ message: 'application updated successfully.' });
  } catch (err) {
    Logger.error(err);
    return res.status(500).json({ message: 'could not process request', err });
  }
});

/* Delete application */
router.delete('/delete', JSONParser, verifyAuth, async (req: express.Request | any, res: express.Response) => {
  try {
    Logger.debug('> Requesting application updation...');
    const application = await Application.find({ _user: req.user.id });
    if (!application || application.length === 0) { return res.status(204).json({ message: 'no application found for this user' }); }
    if (application.length > 1) {
      Logger.warn('! More than one application found for one user');
      return res.status(409).json({ message: 'more than one application found for one user' });
    }
    const deleteResult = await Application.findOneAndDelete({ _user: req.user.id });
    if (!deleteResult) { throw new Error('error deleting application'); }
    return res.status(200).json({ message: 'application deleted successfully.' });
  } catch (err) {
    Logger.error(err);
    return res.status(500).json({ message: 'could not process request', err });
  }
});

/* Get all applications */

router.get('/all', verifyAuth, async (req: any, res: any) => {
  if (req.user.type !== 'admin') { return res.status(401).json({ message: 'not admin' }) }
  try {
    Logger.debug('Getting all applications...');
    const applications = await Application.find({});
    return res.status(200).send(applications);
  } catch {
    return res.status(500);
  }
})

export default router;
