import express from 'express';

const mood = express.Router();

// 월별 조회
mood.get('/moods{:year, :date}', (req, res) => {
  res.status(200).json({
    moods: [
      { day: 1, mood: '😀' },
      { day: 2, mood: null },
      { day: 3, mood: '😢' },
    ],
  });
});

// 일별 조회
mood.get('/:date', (req, res) => {
  res.status(200).json({
    date: '2025-09-03',
    mood: {
      value: '😀',
      msg: 'awesome',
      comments: [
        {
          user: {
            id: 123,
            name: 'Mirea',
            avatar: 'https://example.com/avatar.jpg',
          },
          comment: 'wow!',
        },
      ],
    },
  });
});

mood.post('/:date', (req, res) => {
  console.log(req.body);
  res.send(201).json({});
});

mood.put('/:date', (req, res) => {
  console.log(req.body);
  res.send(201).json({});
});

mood.delete('/:date', (req, res) => {
  res.send(204);
});

export default mood;
