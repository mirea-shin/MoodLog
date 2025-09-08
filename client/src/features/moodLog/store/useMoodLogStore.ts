import { create } from 'zustand';

interface MoodLog {
  mood: null | 'happy' | 'sad';
  msg: null | string;
}

interface MoodLogState {
  selectedDate: Date;
  moodLog: MoodLog | null;
}

interface MoodLogAction {
  setSelectedDate: (date: Date) => void;
}

const useMoodLogStore = create<MoodLogState & MoodLogAction>((set) => ({
  selectedDate: new Date(),
  moodLog: null,

  // action
  setSelectedDate: (date) => set({ selectedDate: date }),
}));

export default useMoodLogStore;
