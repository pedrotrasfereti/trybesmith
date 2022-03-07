import Joi from 'joi';
import { IOrder } from '../interfaces';
import { order } from '../messages';

const orderSchema = Joi.object({
  products: Joi.array().items(Joi.number()).min(1).required()
    .messages({
      'any.required': order.products.required,
      'array.base': order.products.base,
      'array.min': order.products.min,
    }),
});

const validateOrder = (body: IOrder) => {
  const { error } = orderSchema.validate(body);
  if (error) throw error;
};

export default validateOrder;
