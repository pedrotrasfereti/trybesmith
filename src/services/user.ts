import { userModel } from '../models';
import { sign } from '../utils/jwt';
import { IUser } from '../utils/interfaces';

const create = async (newUser: IUser) => {
  const { username } = newUser;

  const { id } = await userModel.create(newUser);

  const token = sign({ id, username });

  return token;
};

export default create;
