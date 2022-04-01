import { Router } from 'express';
import { createUserController } from '../controllers';

const users = Router();

users.post('/', createUserController);

export default users;
