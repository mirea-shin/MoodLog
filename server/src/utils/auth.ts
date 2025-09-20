import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const generateToken = () => jwt.sign({ foo: 'bar' }, 'shhhhh');

const saltRounds = 10;

export const generateBcrypt = async (password: string) => {
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
};

export const checkPwd = async (parsedPwd: string, savedPwd: string) => {
  return await bcrypt.compare(parsedPwd, savedPwd);
};
