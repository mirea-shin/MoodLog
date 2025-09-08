import { MoodCalendar, MoodSidebar, MoodHeader } from '../index';

import Card from '../../../shared/components/ui/Card';

export default function MoodDashboard() {
  return (
    <Card className="grid grid-cols-[70%_30%] w-4/5 h-[80vh] px-5 py-3">
      <div className="col-span-2 ">
        <MoodHeader />
      </div>
      <MoodCalendar />
      <MoodSidebar />
    </Card>
  );
}
