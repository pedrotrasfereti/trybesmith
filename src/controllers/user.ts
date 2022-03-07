import rescue from 'express-rescue';
import { RequestHandler } from 'express';
import { userService } from '../services';

import { IUser } from '../utils/interfaces';
import { validateUser } from '../utils/joi';
import StatusCode from '../utils/statusCode';

const create: RequestHandler = rescue(async (req, res) => {
  const newUser: IUser = req.body;

  validateUser(newUser);

  const token = await userService(newUser);

  res.status(StatusCode.CREATED).json({ token });
});

export default create;
