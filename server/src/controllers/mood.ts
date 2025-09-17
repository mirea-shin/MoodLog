import { Request, Response } from 'express';

import {
  getMonthlyData,
  findDailyData,
  updateMonthlyData,
  addMoodData,
  filterMonthlyData,
} from '../data/mood';

export const getMonthlyMoods = (req: Request, res: Response) => {
  res.status(200).json({
    monthly: getMonthlyData(),
  });
};

export const getDailyMood = async (req: Request, res: Response) => {
  const { date } = req.params;

  const founded = await findDailyData(date);

  if (founded) {
    res.status(200).json({ ...founded });
  } else {
    res.sendStatus(404);
  }
};

export const addMood = async (req: Request, res: Response) => {
  const { date } = req.params;

  await addMoodData(date, req.body);

  res.status(201).json({ monthly: getMonthlyData() });
};

export const editMood = async (req: Request, res: Response) => {
  const { date } = req.params;

  await updateMonthlyData(date, req.body);

  res.status(201).json({ monthly: getMonthlyData() });
};

export const deleteMood = async (req: Request, res: Response) => {
  const { date } = req.params;

  await filterMonthlyData(date);

  res.status(204).json({ monthly: getMonthlyData() });
};
