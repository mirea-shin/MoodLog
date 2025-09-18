import { param, query, body } from 'express-validator';

export const dateSanitize = param('date')
  .trim()
  .notEmpty() //
  .matches(/^\d{4}-\d{2}-\d{2}$/)
  .withMessage('날짜 형식은 YYYY-MM-DD 이어야 합니다.');

export const searchQuerySanitize = query(['year', 'month'])
  .trim()
  .notEmpty() //
  .withMessage('쿼리 데이터의 형식이 올바르지 않습니다.');

export const moodFormSanitize = [
  body('label')
    .trim()
    .notEmpty()
    .withMessage('바디 데이터의 형식이 올바르지 않습니다.'),
  body('message')
    .trim()
    .optional()
    .isLength({ min: 2, max: 50 })
    .withMessage('length가 썸띵우롱'),
];
