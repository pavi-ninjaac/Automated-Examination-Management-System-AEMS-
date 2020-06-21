import express from 'express';
import bodyParser from 'body-parser';
import Logger from 'js-logger';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User, { UserInterface } from '../models/User';

const router = express.Router();
const JSONParser = bodyParser.json();
const saltRounds = 5;

/* Just detect stupid hackers */
router.get('/', (req, res) => {
  res.sendStatus(400);
  Logger.warn('AppInvalid route accessing detected:');
  Logger.info(req);
});

/* NEW USER */
router.post('/create', JSONParser, async (req, res) => {
  try {
    const existingUser = await User.find({ email: req.body.email }, { password: 0 });
    if (existingUser.length !== 0) {
      if (existingUser.length > 1) { Logger.error('Unique email violation detected!'); }
      res.status(409).send({ message: 'email is already used' }); return;
    }
    const hashedPassword: string = await bcrypt.hash(req.body.password, saltRounds);
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: hashedPassword
    });
    await newUser.save();
    res.status(201).send({ message: 'account created successfully' });
  } catch (err) {
    res.sendStatus(500);
    Logger.error(err);
  }
});

/* Login: Create and send a JWT */
router.get('/start', JSONParser, (req, res) => {
  User.findOne({ email: req.body.email }, async (err, user: UserInterface) => {
    if (err) { res.sendStatus(500); Logger.error('Error finding accounts'); return; }
    if (!user) { res.status(401).send({ message: 'user not found' }); return; }
    try {
      const isAuthentic = await bcrypt.compare(req.body.password, user.password);
      if (!isAuthentic) { res.status(401).send({ message: 'wrong password' }); return; }
      const token = jwt.sign({
        id: user._id,
        email: user.email
      }, (process.env.SECRET as string), { expiresIn: '1h' });
      res.status(200).send({ authenticated: true, accessToken: token, id: user._id, name: user.name });
    } catch (err) {
      res.sendStatus(500);
      Logger.error(err);
    }
  });
})

export default router;
