import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

export function CalendarView() {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentMonth = 'December 2024';

  const calendarDays = [
    { day: 27, isCurrentMonth: false, tasks: [] },
    { day: 28, isCurrentMonth: false, tasks: [] },
    { day: 29, isCurrentMonth: false, tasks: [] },
    { day: 30, isCurrentMonth: false, tasks: [] },
    { day: 1, isCurrentMonth: true, tasks: [] },
    { day: 2, isCurrentMonth: true, tasks: [] },
    { day: 3, isCurrentMonth: true, tasks: [] },
    { day: 4, isCurrentMonth: true, tasks: [{ title: 'Team Meeting', color: 'bg-primary-500' }] },
    { day: 5, isCurrentMonth: true, tasks: [] },
    { day: 6, isCurrentMonth: true, tasks: [] },
    { day: 7, isCurrentMonth: true, tasks: [] },
    { day: 8, isCurrentMonth: true, tasks: [] },
    { day: 9, isCurrentMonth: true, tasks: [] },
    { day: 10, isCurrentMonth: true, tasks: [] },
    {
      day: 11,
      isCurrentMonth: true,
      tasks: [
        { title: 'Design Review', color: 'bg-purple-500' },
        { title: 'Client Call', color: 'bg-green-500' },
      ],
    },
    { day: 12, isCurrentMonth: true, tasks: [] },
    { day: 13, isCurrentMonth: true, tasks: [] },
    { day: 14, isCurrentMonth: true, tasks: [] },
    { day: 15, isCurrentMonth: true, tasks: [{ title: 'Sprint Planning', color: 'bg-orange-500' }] },
    { day: 16, isCurrentMonth: true, tasks: [] },
    { day: 17, isCurrentMonth: true, tasks: [] },
    { day: 18, isCurrentMonth: true, tasks: [] },
    { day: 19, isCurrentMonth: true, tasks: [] },
    { day: 20, isCurrentMonth: true, tasks: [] },
    { day: 21, isCurrentMonth: true, tasks: [] },
    { day: 22, isCurrentMonth: true, tasks: [] },
    { day: 23, isCurrentMonth: true, tasks: [] },
    { day: 24, isCurrentMonth: true, isToday: true, tasks: [{ title: 'Code Review', color: 'bg-blue-500' }] },
    { day: 25, isCurrentMonth: true, tasks: [] },
    { day: 26, isCurrentMonth: true, tasks: [] },
    { day: 27, isCurrentMonth: true, tasks: [] },
    { day: 28, isCurrentMonth: true, tasks: [] },
    { day: 29, isCurrentMonth: true, tasks: [] },
    { day: 30, isCurrentMonth: true, tasks: [] },
    { day: 31, isCurrentMonth: true, tasks: [] },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Calendar</h1>
          <p className="text-gray-600 dark:text-gray-400">View your tasks and schedule</p>
        </div>

        <button className="bg-primary-500 hover:bg-primary-600 text-white rounded-lg px-4 py-2.5 flex items-center gap-2 transition-all duration-200 hover:shadow-lg">
          <Plus className="w-4 h-4" />
          New Event
        </button>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{currentMonth}</h2>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
              <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            <button className="px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-medium">
              Today
            </button>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
              <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-px bg-gray-200 dark:bg-gray-800 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
          {daysOfWeek.map((day) => (
            <div
              key={day}
              className="bg-gray-50 dark:bg-gray-800 p-3 text-center text-sm font-semibold text-gray-700 dark:text-gray-300"
            >
              {day}
            </div>
          ))}

          {calendarDays.map((dayInfo, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-900 min-h-[120px] p-2 relative ${
                !dayInfo.isCurrentMonth ? 'opacity-40' : ''
              } ${
                dayInfo.isToday ? 'ring-2 ring-primary-500 ring-inset' : ''
              } hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer`}
            >
              <span
                className={`text-sm font-medium ${
                  dayInfo.isToday
                    ? 'bg-primary-500 text-white w-7 h-7 rounded-full flex items-center justify-center'
                    : 'text-gray-900 dark:text-white'
                }`}
              >
                {dayInfo.day}
              </span>

              <div className="mt-2 space-y-1">
                {dayInfo.tasks.map((task, taskIndex) => (
                  <div
                    key={taskIndex}
                    className={`${task.color} text-white text-xs px-2 py-1 rounded truncate`}
                  >
                    {task.title}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
