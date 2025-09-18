import express from 'express';

import {
  getMonthlyMoods,
  getDailyMood,
  addNewMood,
  updateMood,
  deleteMood,
} from '../controllers/mood';

import {
  dateSanitize,
  searchQuerySanitize,
  moodFormSanitize,
} from '../validators/mood';

import { handleValidationErrors } from '../middlewares/validationHandler';

const mood = express.Router();

// 월별 조회
mood.get('/', searchQuerySanitize, handleValidationErrors, getMonthlyMoods);

// 일별 조회
mood.get('/:date', dateSanitize, handleValidationErrors, getDailyMood);

// 무드 등록
mood.post(
  '/:date',
  [dateSanitize, ...moodFormSanitize],
  handleValidationErrors,
  addNewMood
);

// 수정
mood.put(
  '/:date',
  [dateSanitize, ...moodFormSanitize],
  handleValidationErrors,
  updateMood
);

// 삭제
mood.delete('/:date', dateSanitize, handleValidationErrors, deleteMood);

export default mood;
