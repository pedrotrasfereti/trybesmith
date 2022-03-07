import rescue from 'express-rescue';
import { RequestHandler } from 'express';
import { loginService } from '../services';
import { request } from '../utils/messages';

import { validateLogin } from '../utils/joi';

import { IUser } from '../utils/interfaces';
import StatusCode from '../utils/statusCode';

const login: RequestHandler = rescue(async (req, res) => {
  const loginData: IUser = req.body;

  validateLogin(loginData);

  const token = await loginService(loginData);

  if (!token) {
    return res
      .status(StatusCode.UNAUTHORIZED)
      .json({ error: request.login.invalid });
  }

  return res.status(StatusCode.OK).json({ token });
});

export default login;
