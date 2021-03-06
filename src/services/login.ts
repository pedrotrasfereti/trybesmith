import { ILogin } from '../utils/interfaces';
import { sign } from '../utils/jwt';
import { userModel } from '../models';

const login = async (loginData: ILogin) => {
  const userData = await userModel.findByLogin(loginData);

  if (!userData) return false;

  return sign(userData);
};

export default login;
