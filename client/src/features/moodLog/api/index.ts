import { api } from '../../../../axiosConfig';

export const getMonthMood = () => api.get('/moods?year=2025&date=09');

export const getMood = () => api.get('/mood/2025-09-03');

export const addMood = () => {};

export const editMood = () => {};

export const deleteMood = () => {};
