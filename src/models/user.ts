import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { IUser, ILogin, IPayload } from '../utils/interfaces';

// query variables
const tableName = 'Trybesmith.Users';
const attributes = '(username,classe,level,password)';

/**
 * Inserts a new user into the Users table
 * 
 * @param newUser - An object containing the user's data
 * @returns The insert id of the created user
 * 
 */
const create = async (newUser: IUser) => {
  const { username, classe, level, password } = newUser;

  const [data] = await connection.execute<ResultSetHeader>(
    `INSERT INTO ${tableName} ${attributes} VALUES (?, ?, ?, ?)`,
    [username, classe, level, password],
  );

  return data.insertId;
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

  const [data] = await connection.execute<RowDataPacket[]>(
    `SELECT id, username FROM ${tableName} WHERE username = ? AND password = ?`,
    [username, password],
  );

  // type casting
  const [user] = data as unknown as IPayload[];

  return user;
};

export default { create, findByLogin };
