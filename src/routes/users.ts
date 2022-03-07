import { Router } from 'express';
import { userController } from '../controllers';

const users = Router();

users.post('/', userController);

export default users;
