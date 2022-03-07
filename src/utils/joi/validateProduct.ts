import Joi from 'joi';
import { IProduct } from '../interfaces';
import { product } from '../messages';

const productSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    'any.required': product.name.required,
    'string.base': product.name.base,
    'string.min': product.name.min,
  }),
  amount: Joi.string().min(3).required().messages({
    'any.required': product.amount.required,
    'string.base': product.amount.base,
    'string.min': product.amount.min,
  }),
});

const validateProduct = (body: IProduct) => {
  const { error } = productSchema.validate(body);
  if (error) throw error;
};

export default validateProduct;
