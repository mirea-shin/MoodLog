export const getDateParts = (date: Date) => {
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1, // 0부터 시작하니까 +1
    day: date.getDate(),
  };
};
