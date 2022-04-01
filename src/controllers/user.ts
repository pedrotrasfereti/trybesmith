import rescue from 'express-rescue';
import { RequestHandler } from 'express';
import { createUserService } from '../services';

import { IUser } from '../utils/interfaces';
import { validateUser } from '../utils/joi';
import StatusCode from '../utils/statusCode';

const createUserController: RequestHandler = rescue(async (req, res) => {
  const newUser: IUser = req.body;

  validateUser(newUser);

  const token = await createUserService(newUser);

  res.status(StatusCode.CREATED).json({ token });
});

export default createUserController;
