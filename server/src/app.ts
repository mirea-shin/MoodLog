import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import mood from './router/mood';

const app = express();
const PORT = 3000;

// JSON 파싱 미들웨어 추가
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.use('/mood', mood);
app.listen(PORT, () => console.log(`Server running: http://localhost:${PORT}`));
