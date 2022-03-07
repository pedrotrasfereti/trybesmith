import { ErrorRequestHandler } from 'express';
import Joi from 'joi';
import StatusCode from '../../utils/statusCode';

const joiError: ErrorRequestHandler = async (err, _req, res, next) => {
  if (Joi.isError(err)) {
    const { type, message } = err.details[0];
    const status = type === 'any.required'
      ? (StatusCode.BAD_REQUEST) : (StatusCode.UNPROCESSABLE_ENTITY);
  
    return res
      .status(status)
      .json({ error: message });
  }

  next(err);
};

export default joiError;
