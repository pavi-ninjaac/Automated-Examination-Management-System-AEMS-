import Joi from '@hapi/joi';

const applicationValidationSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
});

const validate = (application: Object): Promise<any> => applicationValidationSchema.validateAsync(application);

export default validate;
