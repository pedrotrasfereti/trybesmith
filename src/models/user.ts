import prisma from './prisma';
import { IUser, ILogin } from '../utils/interfaces';

/**
 * Inserts a new user into the Users table
 * 
 * @param newUser - An object containing the user's data
 * @returns The insert id of the created user
 * 
 */
const create = async (newUser: IUser) => {
  return await prisma.user.create({
    data: newUser,
    select: { id: true, username: true }, // cli response
  });
};

/**
 * Finds one user by their username and password
 * 
 * @param loginData - The login information
 * @returns The matching user
 * 
 */
const findByLogin = async (loginData: ILogin) => {
  const { username, password } = loginData;

  return await prisma.user.findFirst({
    select: { id: true, username: true },
    where: {
      AND: {
        username,
        password,
      },
    },
  });
};

export default {
  create,
  findByLogin,
};
