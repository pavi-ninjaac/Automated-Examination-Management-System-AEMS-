import Joi from '@hapi/joi';
import { UserInterface } from '../models/User';

const userValidationSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .required(),

  email: Joi.string().min(10).max(255).required()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'in'] } }),

  phone: Joi.number().integer().max(9999999999).min(5555555555),

  password: Joi.string().regex(new RegExp('^(?=.*[A-Z])(?=.*[!@#$&*%+])(?=.*[0-9])(?=.*[a-z]).{6,18}$'))
  // 1 small letter, 1 capital letter, 1 special char, 1 no., min: 6, max: 18
}).unknown();

const validate = (user: UserInterface): Promise<any> => userValidationSchema.validateAsync(user);

export default validate;
