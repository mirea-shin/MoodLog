import { useMoodLogStore } from '../index';

import { getDateParts } from '../../../utils/date';
import MoodLogForm from './MoodLogForm';

export default function MoodSidebar() {
  const { selectedDate } = useMoodLogStore();

  const { year, month, day } = getDateParts(selectedDate);

  return (
    <div>
      <div>
        {day}/{month} , {year}
      </div>
      <MoodLogForm />
    </div>
  );
}
