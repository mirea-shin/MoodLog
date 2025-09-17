import express from 'express';

const mood = express.Router();

import {
  getMonthlyMoods,
  getDailyMood,
  addMood,
  editMood,
  deleteMood,
} from '../controllers/mood';

// 월별 조회
mood.get('/{:year, :month}', getMonthlyMoods);

// 일별 조회
mood.get('/:date', getDailyMood);

// 무드 등록
mood.post('/:date', addMood);

// 수정
mood.put('/:date', editMood);

// 삭제
mood.delete('/:date', deleteMood);

export default mood;
