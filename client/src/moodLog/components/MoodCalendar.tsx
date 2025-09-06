import { useState } from 'react';
import Calendar from 'react-calendar';

export default function MoodCalendar() {
  const [selectedDay, setSelectedDay] = useState(new Date());

  return (
    <div>
      <Calendar
        showNeighboringMonth={false}
        onClickDay={(value) => setSelectedDay(value)}
        tileContent={({ activeStartDate, date, view }) =>
          view === 'month' && date.getDate() === selectedDay.getDate() ? (
            <p>It's selected!</p>
          ) : null
        }
        // className={['border', 'border-red-300']}
      />
    </div>
  );
}
