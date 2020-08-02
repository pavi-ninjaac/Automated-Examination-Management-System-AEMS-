import express from 'express';
import Logger from 'js-logger';

import Application, { applicationSchema } from '../models/Application';
import verifyAuth from '../middlewares/verifyAuth';
import mail from '../middlewares/mailer';

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
    mail(undefined, req.body.email, 'Application Registered', `
      <h1>Application was registered successfully</h1>
      <p>Your application for Sikkim Teacher Eligibility Test was submitted successfully. You will updated about the verification process via email. Thank you.</p>
    `);
    return res.status(200).json({ message: 'application submitted successfully' });
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
    mail(undefined, req.body.email, 'Application Updated', `
      <h1>Application was updated successfully</h1>
      <p>Your application for Sikkim Teacher Eligibility Test was updated successfully. You will updated about the verification process via email. Thank you.</p>
    `);
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
    mail(undefined, req.body.email, 'Application Deleted', `
      <h1>Application was deleted</h1>
      <p>Your application for Sikkim Teacher Eligibility Test was deleted. You will updated about the verification process via email. Thank you.</p>
    `);
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
    const applications = await Application.find({}, { __v: 0 });
    return res.status(200).send(applications);
  } catch {
    return res.status(500);
  }
});

router.get('/:id', verifyAuth, async (req: any, res: any) => {
  try {
    Logger.debug('Getting the application...');
    const application = await Application.findOne({ _id: req.params.id }, { __v: 0 });
    if (!application) { return res.status(200).send({ message: 'not found' }); }
    if (req.user.type !== 'admin' && req.user.id != application.toObject()._user) {
      Logger.debug('Req:', req.user.id);
      Logger.debug('Res:', application.toObject()._user);
      return res.status(401).json({ message: 'not admin' });
    }
    return res.status(200).send(application);
  } catch {
    return res.status(500);
  }
});

router.get('/:user', verifyAuth, async (req: any, res: any) => {
  try {
    Logger.debug('Getting the application...');
    if (req.user.type !== 'admin' || req.user.id !== req.params.user) { return res.status(401).json({ message: 'not admin' }) }
    const applications = await Application.findOne({ _user: req.params.user }, { __v: 0 });
    if (!applications) { return res.status(200).send({ message: 'not found' }); }
    return res.status(200).send(applications);
  } catch {
    return res.status(500);
  }
});


export default router;
