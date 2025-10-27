import { Calendar, Clock, Users } from 'lucide-react';

export function UpcomingSchedule() {
  const events = [
    {
      id: 1,
      title: 'Team Standup',
      time: '09:00 AM',
      type: 'meeting',
      attendees: 5,
      color: 'border-l-primary-500',
    },
    {
      id: 2,
      title: 'Client Presentation',
      time: '02:00 PM',
      type: 'meeting',
      attendees: 3,
      color: 'border-l-danger-500',
    },
    {
      id: 3,
      title: 'Code Review Session',
      time: '04:30 PM',
      type: 'task',
      attendees: 2,
      color: 'border-l-warning-500',
    },
    {
      id: 4,
      title: 'Project Planning',
      time: '06:00 PM',
      type: 'meeting',
      attendees: 8,
      color: 'border-l-success-500',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-2 mb-6">
        <Calendar className="w-5 h-5 text-primary-500" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Today's Schedule</h3>
      </div>

      <div className="space-y-3">
        {events.map((event) => (
          <div
            key={event.id}
            className={`p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border-l-4 ${event.color} hover:bg-gray-100 dark:hover:bg-gray-750 transition-all duration-200 cursor-pointer`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">{event.title}</h4>
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{event.attendees} people</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 py-2.5 text-primary-500 font-medium hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-all duration-200">
        View Full Calendar
      </button>
    </div>
  );
}
