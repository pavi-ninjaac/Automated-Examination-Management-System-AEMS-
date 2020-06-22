import bcrypt from 'bcrypt';
import bodyParser from 'body-parser';
import express from 'express';
import Logger from 'js-logger';

import User, { UserInterface } from '../models/User';
import { generateAccessToken, generateRefreshToken, validateToken } from '../middlewares/tokens';
import userValidator from '../validators/user';
import validate from '../validators/user';

const router = express.Router();
const JSONParser = bodyParser.json();
const saltRounds = 5;

/* NEW USER */
router.post('/register', JSONParser, async (req: express.Request, res: express.Response) => {
  try {
    Logger.debug('> New user registration request.')
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
      await validate(newUser);
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

/* Login: Create and send a JWT */
router.get('/signin', JSONParser, (req: express.Request, res: express.Response) => {
  User.findOne({ email: req.body.email }, async (err, user: UserInterface) => {
    if (err) { Logger.error('Error finding accounts'); return res.sendStatus(500); }

    // Check if the email id exist
    if (!user) { return res.status(401).json({ message: 'user not found' }); }
    try {
      const isAuthentic = await bcrypt.compare(req.body.password, user.password);
      if (!isAuthentic) { return res.status(401).json({ message: 'wrong password' }); }

      Logger.debug('Generating tokens...');
      const accessToken = generateAccessToken(user);
      const refreshToken = generateRefreshToken(user);
      res.status(200).json({ authenticated: true, accessToken: accessToken, refreshToken: refreshToken, name: user.name });
    } catch (err) {
      res.sendStatus(500);
      Logger.error(err);
    }
  });
});

router.get('/userDetails', validateToken, (req: express.Request | any, res: express.Response) => { return res.send(req.user); });

export default router;
