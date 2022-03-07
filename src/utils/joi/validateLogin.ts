import Joi from 'joi';
import { ILogin } from '../interfaces';
import { user } from '../messages';

const loginSchema = Joi.object({
  username: Joi.string().required().messages({
    'any.required': user.username.required,
    'string.base': user.username.base,
  }),
  password: Joi.string().required().messages({
    'any.required': user.password.required,
    'string.base': user.password.base,
  }),
});

const validateLogin = (body: ILogin) => {
  const { error } = loginSchema.validate(body);
  if (error) throw error;
};

export default validateLogin;
