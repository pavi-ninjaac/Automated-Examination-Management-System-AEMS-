import bcrypt from 'bcrypt';
import express, { request } from 'express';
import Logger from 'js-logger';

import User, { UserInterface } from '../models/User';
import { generateAccessToken, generateRefreshToken, validateToken } from '../middlewares/tokens';
import verifyAuth from '../middlewares/verifyAuth';
import validateUser from '../validators/user';

const router = express.Router();
const JSONParser = express.json();
const saltRounds = 5;

/* NEW USER */
router.post('/register', JSONParser, async (req: express.Request, res: express.Response) => {
  try {
    Logger.debug('> New user registration request')
    // Check if the mail ID is already used
    const existingUser = await User.find({ email: req.body.email }, { password: 0 });
    if (existingUser.length !== 0) {
      if (existingUser.length > 1) { Logger.error('Unique email violation detected!'); }
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
      Logger.debug('Validating credentials...')
      await validateUser(newUser);
    } catch (validationError) {
      return res.status(409).json({ message: 'validation error', details: validationError.details });
    }

    // Hash the password
    Logger.debug('Hashing password...');
    newUser.password = await bcrypt.hash(req.body.password, saltRounds);

    // Store user to DB
    Logger.debug('Creating user...');
    const savedUser = await newUser.save();
    if (savedUser === newUser) {
      Logger.debug('User created.')
      res.status(201).json({ message: 'account created successfully' });
    }
  } catch (err) {
    res.sendStatus(500);
    Logger.error(err);
  }
});

/* Update account details [name, email, password] */
router.post('/update', JSONParser, verifyAuth, async (req: express.Request | any, res: express.Response) => {
  Logger.debug('> User update request')
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

router.post('/delete', verifyAuth, (req: express.Request | any, res) => {
  const { id: userId } = req.user
  User.findByIdAndDelete(userId, (err, user) => {
    if (err) { return res.status(500).json({ message: 'error deleting user', details: err }) }
    if (!user) { return res.status(500).json({ message: 'error deleting user', details: 'user not found' }) }
    if (user._id === userId) { return res.status(200).json({ message: 'user deleted successfully' }) }
    else { Logger.error('Suspected error: deleted wrong user!', user); return res.sendStatus(200) }
  });
});

/* Login: Create and send a JWT */
router.get('/signin', JSONParser, (req: express.Request, res: express.Response) => {
  Logger.debug('> Login request');
  User.findOne({ email: req.body.email }, async (err, user: UserInterface) => {
    if (err) { Logger.error('Error finding accounts'); return res.sendStatus(500); }

    // Check if the email id exist
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

router.get('/logout', verifyAuth, (req: Express.Request | any, res) => {
  Logger.debug('> Logout request');
  if (!req.user) { return res.status(403).json({ message: 'not authenticated' }) }
  generateAccessToken(req.user);
  generateRefreshToken(req.user);
  req.user = '';
  req.headers['authorization'] = '';

  return res.status(200).json({ message: 'logout successful' });
});

router.get('/details', verifyAuth, async (req: Express.Request | any, res) => {
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
