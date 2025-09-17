import QueryString from 'qs';

const FAKE_MOODS = [
  { day: 1, emoji: '😊', label: 'Happy', message: '햅삐!!!' },
  { day: 2, emoji: '😌', label: 'Calm', message: '칾!!!' },
  // { day: 3, emoji: null, label: null, message: null },
  { day: 4, emoji: '😢', label: 'Sad', message: '쓸뽀!' },
  { day: 5, emoji: '😎', label: 'Confident', message: '자쉰있어!' },
  // { day: 6, emoji: null, label: null, message: null },
  { day: 7, emoji: '😡', label: 'Angry', message: null },
  { day: 8, emoji: '🥳', label: 'Excited', message: null },
  // { day: 9, emoji: null, label: null, message: null },
  { day: 10, emoji: '😔', label: 'Down', message: null },
  { day: 11, emoji: '😤', label: 'Frustrated', message: null },
  // { day: 12, emoji: null, label: null, message: null },
  { day: 13, emoji: '😰', label: 'Anxious', message: null },
  { day: 14, emoji: '😌', label: 'Calm', message: null },
  // { day: 15, emoji: null, label: null, message: null },
  { day: 16, emoji: '😊', label: 'Happy', message: null },
  { day: 17, emoji: '😟', label: 'Worried', message: null },
  // { day: 18, emoji: null, label: null, message: null },
  { day: 19, emoji: '🥳', label: 'Excited', message: null },
  { day: 20, emoji: '😢', label: 'Sad', message: null },
  // { day: 21, emoji: null, label: null, message: null },
  { day: 22, emoji: '😎', label: 'Confident', message: null },
  { day: 23, emoji: '😤', label: 'Frustrated', message: null },
  // { day: 24, emoji: null, label: null, message: null },
  { day: 25, emoji: '😡', label: 'Angry', message: null },
  { day: 26, emoji: '😌', label: 'Calm', message: null },
  // { day: 27, emoji: null, label: null, message: null },
  { day: 28, emoji: '😔', label: 'Down', message: null },
  { day: 29, emoji: '😊', label: 'Happy', message: null },
  // { day: 30, emoji: null, label: null, message: null },
];

const getFakeMoodData = () => {
  // TODO : year&month 기준으로 쿼리 로직이 필요함
  return FAKE_MOODS;
};

const findMood = (day: number) =>
  getFakeMoodData().find((mood) => mood.day === day);

const mappingEmoji = (label: string) => '🥰';

const getDate = (date: string) => {
  const [year, month, day] = date.split('-').map(Number);
  return { year, month, day };
};

export const getMonthData = (query: QueryString.ParsedQs) => {
  const { year, month } = query;

  if (!year || !month) return null;

  return { moods: getFakeMoodData(), year, month };
};

export const getDayData = (date: string) => {
  const { day } = getDate(date);
  const founded = findMood(day);

  return founded
    ? { ...founded, createdAt: '2025-09-17T17:06:19.606Z' }
    : undefined;
};

export const addMoodData = (
  newMood: {
    label: string;
    message: string | null;
  },
  date: string
) => {
  const { day } = getDate(date);
  const founded = findMood(day);

  if (founded) return null;

  const newData = {
    ...newMood,
    emoji: mappingEmoji(newMood.label),
    day,
  };

  FAKE_MOODS.push(newData);

  return newData;
};

export const editMoodData = (
  editMood: {
    label: string;
    messge: string | null;
  },
  date: string
) => {
  const { day } = getDate(date);
  const founded = findMood(day);

  if (!founded) return null;

  // TODO : 시간관련해서 뭔가 해야할 듯
  // const FAKE_TIME_DATA = {
  //   createdAt: new Date().toISOString(),
  //   updatedAt: new Date().toISOString(),
  // };

  const updatedData = { ...editMood, emoji: mappingEmoji(editMood.label), day };

  const newArr = FAKE_MOODS.map((mood) =>
    mood.day === day ? updatedData : mood
  );

  return updatedData;
};

export const deleteMoodData = (date: string) => {
  const { day } = getDate(date);
  const founded = findMood(day);
  // 삭제한다 치고
  return founded;
};
