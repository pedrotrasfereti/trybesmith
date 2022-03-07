import jwt from 'jsonwebtoken';
import { IPayload } from './interfaces';

const JWT_SECRET = process.env.JWT_SECRET || '';

export const sign = (payload: IPayload) => jwt.sign(
  payload,
  JWT_SECRET,
  {
    algorithm: 'HS256',
    expiresIn: '1h',
  },
);

export const verify = (token: string) => jwt
  .verify(token, JWT_SECRET, { algorithms: ['HS256'] });
