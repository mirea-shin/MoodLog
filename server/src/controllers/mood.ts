import { Request, Response } from 'express';
import {
  getMonthData,
  getDayData,
  addMoodData,
  editMoodData,
  deleteMoodData,
} from '../data/mood';

export const getMonthlyMoods = async (req: Request, res: Response) => {
  const moods = await getMonthData(req.query);

  return moods
    ? res.status(200).json(moods)
    : res.status(400).json({ message: 'Invaild query' });
};

export const getDailyMood = async (req: Request, res: Response) => {
  const { date } = req.params;
  if (!date) return res.status(400).json({ message: 'Invaild param' });

  const mood = await getDayData(date);

  return mood
    ? res.status(200).json(mood)
    : res.send(404).json({ message: 'no Data' });
};

export const addNewMood = async (req: Request, res: Response) => {
  const { date } = req.params;
  if (!date) return res.status(400).json({ message: 'Invaild param' });

  const { label, message } = req.body;
  if (!label || !message)
    res.status(400).json({ message: 'req body is something wrong' });

  const newMood = await addMoodData(req.body, date);

  return newMood
    ? res.sendStatus(201)
    : res.status(400).json({ message: 'something went wrong' });
};

export const updateMood = async (req: Request, res: Response) => {
  const { date } = req.params;
  if (!date) return res.status(400).json({ message: 'Invaild param' });

  const { label, message } = req.body;
  if (!label || !message)
    res.status(400).json({ message: 'req body is something wrong' });

  const editedMood = await editMoodData(req.body, date);

  return editedMood
    ? res.sendStatus(201)
    : res.status(400).json({ message: 'something went wrong' });
};

export const deleteMood = async (req: Request, res: Response) => {
  const { date } = req.params;
  if (!date) return res.status(400).json({ message: 'Invaild param' });

  const deletedMood = await deleteMoodData(date);

  deletedMood
    ? res.sendStatus(204)
    : res.status(400).json({ message: 'something went wrong' });
};
