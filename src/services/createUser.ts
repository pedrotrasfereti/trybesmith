import { userModel } from '../models';
import { sign } from '../utils/jwt';
import { IUser } from '../utils/interfaces';

const createUser = async (newUser: IUser) => {
  const { username } = newUser;

  const { id } = await userModel.create(newUser);

  return sign({ id, username });
};

export default createUser;
