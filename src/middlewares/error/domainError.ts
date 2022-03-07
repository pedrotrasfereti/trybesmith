import { ErrorRequestHandler } from 'express';
import { CodeError } from '../../services/error';

const domainError: ErrorRequestHandler = async (
  err,
  _req,
  res,
  next,
) => {
  if (err instanceof CodeError) {
    const { code, message } = err;

    return res
      .status(code)
      .json({ error: message });
  }

  next(err);
};

export default domainError;
