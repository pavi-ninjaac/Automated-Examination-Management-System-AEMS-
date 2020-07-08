import bcrypt from 'bcrypt';
import express from 'express';
import Logger from 'js-logger';

import User, { UserInterface } from '../models/User';
import { generateAccessToken, generateRefreshToken } from '../middlewares/tokens';
import verifyAuth from '../middlewares/verifyAuth';
import validateUser from '../validators/user';
import mail from '../middlewares/mailer';

const router = express.Router();
const URLParser = express.json();
// const URLParser = express.raw();
const saltRounds = 5;

/* NEW USER */
router.post('/register', URLParser, async (req: express.Request, res: express.Response) => {
  try {
    Logger.debug('> New user registration request');
    // Check if the mail ID is already used
    Logger.debug(req.body);
    const existingUser = await User.find({ email: req.body.email }, { password: 0 });
    if (existingUser.length !== 0) {
      return res.status(409).json({ message: 'email is already used' });
    }
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password
    });

    // Validate the details
    try {
      Logger.debug('Validating credentials...');
      await validateUser(newUser);
    } catch (validationError) {
      return res.status(409).send({ message: 'validation error', details: validationError });
    }

    // Hash the password
    Logger.debug('Hashing password...');
    newUser.password = await bcrypt.hash(req.body.password, saltRounds);

    // Store user to DB
    Logger.debug('Creating user...');
    const savedUser = await newUser.save();
    if (savedUser === newUser) {
      Logger.debug('User created.');
      mail(undefined, savedUser.email, 'Account created', `<h1>Account created successfully</h1>`);
      return res.status(201).json({ message: 'account created successfully' });
    }
  } catch (err) {
    Logger.error(err);
    return res.sendStatus(500);
  }
});

/* Update account details [name, email, password] */
router.post('/update', URLParser, verifyAuth, async (req: express.Request | any, res: express.Response) => {
  Logger.debug('> User update request');
  try {
    if (req.body.password) {
      // Hash the password
      Logger.debug('Hashing password...');
      req.body.password = await bcrypt.hash(req.body.password, saltRounds);
    }
    await User.findByIdAndUpdate(req.user.id, req.body);
    return res.status(200).json({ message: 'updated successfully' });
  } catch (error) {
    Logger.error(error);
    return res.status(500).json({ message: 'could not process update request' });
  }
});

/* Delete a user account */
router.post('/delete', verifyAuth, (req: express.Request | any, res: express.Response) => {
  const { id: userId } = req.user;
  User.findByIdAndDelete(userId, (err, user) => {
    if (err) { return res.status(500).json({ message: 'error deleting user', details: err }); }
    if (!user) { return res.status(500).json({ message: 'error deleting user', details: 'user not found' }); }
    if (user._id === userId) { return res.status(200).json({ message: 'user deleted successfully' }); }
  });
});

/* Login: Create and send a JWT */
router.get('/signin', URLParser, (req: express.Request, res: express.Response) => {
  Logger.debug('> Login request');
  User.findOne({ email: req.body.email }, async (err, user: UserInterface) => {
    if (err) { Logger.error('Error finding accounts'); return res.sendStatus(500); }

    // Check if the email id exist
    Logger.debug(user);
    if (!user) { return res.status(401).json({ message: 'user not found' }); }
    try {
      Logger.debug('Deserializing and comparing passwords...');
      const isAuthentic = await bcrypt.compare(req.body.password, user.password);
      if (!isAuthentic) { return res.status(401).json({ message: 'wrong password' }); }

      Logger.debug('Generating tokens...');
      const accessToken = generateAccessToken(user);
      const refreshToken = generateRefreshToken(user);
      res.status(200).json({ authenticated: true, accessToken: accessToken, refreshToken: refreshToken, name: user.name });
    } catch (err) {
      Logger.error(err);
      return res.status(500).json({ message: 'could not process login request' });
    }
  });
});

/* Logout :-> Non functional */
router.get('/logout', verifyAuth, (req: express.Request | any, res) => {
  Logger.debug('> Logout request');
  if (!req.user) { return res.status(403).json({ message: 'not authenticated' }); }
  generateAccessToken(req.user);
  generateRefreshToken(req.user);
  req.user = '';
  req.headers['authorization'] = '';

  return res.status(200).json({ message: 'logout successful' });
});

router.get('/details', verifyAuth, async (req: express.Request | any, res: express.Response) => {
  try {
    const loggedInUser = await User.findOne({ _id: req.user.id }, { password: 0, __v: 0 });
    if (!loggedInUser) {
      return res.status(204).json({ message: 'error finding user' });
    }
    return res.status(200).send(loggedInUser);
  } catch (error) { return res.status(500).json({ message: 'error finding user' }) }
});

router.get('/token-details', verifyAuth, (req: express.Request | any, res: express.Response) => res.send(req.user));

export default router;
