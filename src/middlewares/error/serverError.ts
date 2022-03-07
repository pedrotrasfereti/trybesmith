import { ErrorRequestHandler } from 'express';
import StatusCode from '../../utils/statusCode';

const serverError: ErrorRequestHandler = async (
  err,
  _req,
  res,
  _next,
) => {
  console.error(err);

  return res
    .status(StatusCode.INTERNAL_SERVER_ERROR)
    .json({ message: 'Internal Server Error' });
};

export default serverError;
