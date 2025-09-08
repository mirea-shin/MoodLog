import Calendar from 'react-calendar';

import { useMoodLogStore } from '../index';

export default function MoodCalendar() {
  const { selectedDate, setSelectedDate } = useMoodLogStore();

  return (
    <div>
      <Calendar
        showNeighboringMonth={false}
        onClickDay={(value) => setSelectedDate(value)}
        tileContent={({ activeStartDate, date, view }) =>
          view === 'month' && date.getDate() === selectedDate.getDate() ? (
            <p>It's selected!</p>
          ) : null
        }
        // className={['border', 'border-red-300']}
      />
    </div>
  );
}
