import { Request, Response } from 'express';
import { addNewUser, loginUser } from '../data/auth';

export const login = async (req: Request, res: Response) => {
  const result = await loginUser({ ...req.body });

  return result
    ? res.status(201).json({ ...result })
    : res.status(401).json({ message: 'Invaild User' });
};

export const signup = async (req: Request, res: Response) => {
  const createdUser = await addNewUser({ newUser: req.body });

  return createdUser
    ? res.status(201).json({ message: createdUser })
    : res.status(401).json({
        message: 'Invaild User',
      });
};
