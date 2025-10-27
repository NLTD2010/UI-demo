import { TrendingUp } from 'lucide-react';

export function ProductivityChart() {
  const weekData = [
    { day: 'Mon', tasks: 12, height: '60%' },
    { day: 'Tue', tasks: 15, height: '75%' },
    { day: 'Wed', tasks: 10, height: '50%' },
    { day: 'Thu', tasks: 18, height: '90%' },
    { day: 'Fri', tasks: 14, height: '70%' },
    { day: 'Sat', tasks: 8, height: '40%' },
    { day: 'Sun', tasks: 6, height: '30%' },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-success-500" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">This Week</h3>
        </div>
        <select className="px-3 py-1.5 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 3 months</option>
        </select>
      </div>

      <div className="flex items-end justify-between h-48 gap-3">
        {weekData.map((day) => (
          <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
            <div className="w-full flex flex-col items-center justify-end flex-1">
              <div
                className="w-full bg-gradient-to-t from-primary-500 to-primary-400 rounded-t-lg transition-all duration-300 hover:from-primary-600 hover:to-primary-500 cursor-pointer relative group"
                style={{ height: day.height }}
              >
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  {day.tasks}
                </span>
              </div>
            </div>
            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">{day.day}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-center justify-between text-sm">
          <div>
            <p className="text-gray-600 dark:text-gray-400">Total Completed</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">83 tasks</p>
          </div>
          <div className="text-right">
            <p className="text-gray-600 dark:text-gray-400">Average per day</p>
            <p className="text-2xl font-bold text-success-500">11.9 tasks</p>
          </div>
        </div>
      </div>
    </div>
  );
}
