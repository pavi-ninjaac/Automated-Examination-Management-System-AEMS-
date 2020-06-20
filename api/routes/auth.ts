import express from 'express';
import bodyParser from 'body-parser';
import Logger from 'js-logger';
import bcrypt from 'bcrypt';

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
router.post('/create', JSONParser, (req, res) => {
  bcrypt.hash(req.body.password, saltRounds)
    .then(function (hashedPassword: string) {
      const newTest = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: hashedPassword
      });
      newTest.save()
        .then(() => {
          res.sendStatus(201);
        })
        .catch((error) => { Logger.error(error); });
    })
    .catch(err => {
      Logger.error(`Unable to hash! ${err}`);
      res.sendStatus(500);
    });
});

/* LOGIN attempt */
router.get('/verify', JSONParser, (req, res) => {
  User.findOne({ email: req.body.email }, (err, user: UserInterface) => {
    if (err) { res.sendStatus(500); Logger.error('Error finding accounts'); return; }
    if (!user) { res.send({ message: 'user not found' }); return; }
    bcrypt.compare(req.body.password, user.password)
      .then(function (authenticated) {
        if (authenticated) {
          res.send({ authenticated: true, id: user._id, name: user.name });
        } else {
          res.send({ message: 'wrong password' });
        }
      })
      .catch(err => {
        Logger.error(err);
      });
  });
})

export default router;
