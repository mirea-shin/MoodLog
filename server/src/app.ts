import express from 'express';
import cors from 'cors';

import mood from './controllers/mood';

const app = express();
const PORT = 3000;

// JSON 파싱 미들웨어 추가
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use('/mood', mood);
app.listen(PORT, () => console.log(`Server running: http://localhost:${PORT}`));
