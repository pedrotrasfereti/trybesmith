import Joi from 'joi';
import { IUser } from '../interfaces';
import { user } from '../messages';

const userSchema = Joi.object({
  username: Joi.string().min(3).required().messages({
    'any.required': user.username.required,
    'string.base': user.username.base,
    'string.min': user.username.min,
  }),
  classe: Joi.string().min(3).required().messages({
    'any.required': user.classe.required,
    'string.base': user.classe.base,
    'string.min': user.classe.min,
  }),
  level: Joi.number().strict().positive().required()
    .messages({
      'any.required': user.level.required,
      'number.base': user.level.base,
      'number.positive': user.level.positive,
    }),
  password: Joi.string().min(8).required().messages({
    'any.required': user.password.required,
    'string.base': user.password.base,
    'string.min': user.password.min,
  }),
});

const validateUser = (body: IUser) => {
  const { error } = userSchema.validate(body);
  if (error) throw error;
};

export default validateUser;
