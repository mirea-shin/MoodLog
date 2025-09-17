let MONTH = [
  { day: 1, value: '😊', label: 'Happy', msg: '햅삐!!!' },
  { day: 2, value: '😌', label: 'Calm', msg: '칾!!!' },
  // { day: 3, value: null, label: null, msg: null },
  { day: 4, value: '😢', label: 'Sad', msg: '쓸뽀!' },
  { day: 5, value: '😎', label: 'Confident', msg: '자쉰있어!' },
  // { day: 6, value: null, label: null, msg: null },
  { day: 7, value: '😡', label: 'Angry', msg: null },
  { day: 8, value: '🥳', label: 'Excited', msg: null },
  // { day: 9, value: null, label: null, msg: null },
  { day: 10, value: '😔', label: 'Down', msg: null },
  { day: 11, value: '😤', label: 'Frustrated', msg: null },
  // { day: 12, value: null, label: null, msg: null },
  { day: 13, value: '😰', label: 'Anxious', msg: null },
  { day: 14, value: '😌', label: 'Calm', msg: null },
  // { day: 15, value: null, label: null, msg: null },
  { day: 16, value: '😊', label: 'Happy', msg: null },
  { day: 17, value: '😟', label: 'Worried', msg: null },
  // { day: 18, value: null, label: null, msg: null },
  { day: 19, value: '🥳', label: 'Excited', msg: null },
  { day: 20, value: '😢', label: 'Sad', msg: null },
  // { day: 21, value: null, label: null, msg: null },
  { day: 22, value: '😎', label: 'Confident', msg: null },
  { day: 23, value: '😤', label: 'Frustrated', msg: null },
  // { day: 24, value: null, label: null, msg: null },
  { day: 25, value: '😡', label: 'Angry', msg: null },
  { day: 26, value: '😌', label: 'Calm', msg: null },
  // { day: 27, value: null, label: null, msg: null },
  { day: 28, value: '😔', label: 'Down', msg: null },
  { day: 29, value: '😊', label: 'Happy', msg: null },
  // { day: 30, value: null, label: null, msg: null },
];

const COMMENTS = [
  {
    user: {
      id: 123,
      name: 'Mirea',
      avatar: 'https://example.com/avatar.jpg',
      createdAt: new Date().toString(),
    },
    comment: 'wow!',
  },
];

const getDate = (date: string) => {
  const [year, month, day] = date.split('-').map(Number);

  return { year, month, day };
};

const findDay = (day: number) => getMonthlyData().find((el) => el.day === day);

export const getMonthlyData = () => {
  return MONTH;
};

export const findDailyData = (date: string) => {
  const { day } = getDate(date);
  const founded = findDay(day);

  return founded ? { ...founded, comments: COMMENTS } : null;
};

export const updateMonthlyData = (
  date: string,
  newMood: {
    value: string;
    label: string;
    msg: string;
  }
) => {
  const { day } = getDate(date);
  const founded = findDay(day);

  return founded
    ? (MONTH = getMonthlyData().map((el) =>
        el.day === day ? { ...newMood, day } : el
      ))
    : null;
};

export const addMoodData = (
  date: string,
  newMood: {
    value: string;
    label: string;
    msg: string;
  }
) => {
  const { day } = getDate(date);
  const founded = findDay(day);

  return founded ? null : MONTH.push({ ...newMood, day });
};

export const filterMonthlyData = (date: string) => {
  const { day } = getDate(date);

  const founded = findDay(day);

  if (founded) {
    MONTH = getMonthlyData().filter((el) => el.day !== day);
  }
};
