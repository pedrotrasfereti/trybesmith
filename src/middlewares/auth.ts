import rescue from 'express-rescue';
import { request } from '../utils/messages';
import { verify } from '../utils/jwt';
import { IPayload } from '../utils/interfaces';
import StatusCode from '../utils/statusCode';

const auth = rescue(async (req, res, next) => {
  const token: string = req.headers.authorization || '';

  if (!token) {
    return res
      .status(StatusCode.UNAUTHORIZED)
      .json({ error: request.token.notFound });
  }

  try {
    const { id: payloadId } = verify(token) as IPayload;

    req.userId = payloadId;
  } catch (err) {
    console.error(err);

    return res
      .status(StatusCode.UNAUTHORIZED)
      .json({ error: request.token.invalid });
  }

  next();
});

export default auth;
