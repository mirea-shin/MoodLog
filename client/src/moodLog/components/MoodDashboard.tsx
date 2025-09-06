import MoodCalendar from './MoodCalendar';
import MoodSidebar from './MoodSidebar';

export default function MoodDashboard() {
  return (
    <div className="grid grid-cols-[70%_30%] border">
      <MoodCalendar />
      <MoodSidebar />
    </div>
  );
}
