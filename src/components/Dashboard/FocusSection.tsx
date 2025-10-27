import { Flame, Clock, Flag } from 'lucide-react';

export function FocusSection() {
  const priorityTasks = [
    {
      id: 1,
      title: 'Complete project proposal',
      priority: 'High',
      deadline: '2 hours',
      progress: 60,
    },
    {
      id: 2,
      title: 'Review team documentation',
      priority: 'Medium',
      deadline: '4 hours',
      progress: 30,
    },
    {
      id: 3,
      title: 'Update client presentation',
      priority: 'High',
      deadline: '1 day',
      progress: 80,
    },
  ];

  const priorityColors = {
    High: 'text-danger-500 bg-danger-50 dark:bg-danger-900/20',
    Medium: 'text-warning-500 bg-warning-50 dark:bg-warning-900/20',
    Low: 'text-primary-500 bg-primary-50 dark:bg-primary-900/20',
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-2 mb-6">
        <Flame className="w-5 h-5 text-danger-500" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Focus Zone</h3>
      </div>

      <div className="space-y-4">
        {priorityTasks.map((task) => (
          <div
            key={task.id}
            className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-750 transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-medium text-gray-900 dark:text-white flex-1">{task.title}</h4>
              <span className={`px-2 py-1 rounded-md text-xs font-medium ${priorityColors[task.priority as keyof typeof priorityColors]}`}>
                {task.priority}
              </span>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{task.deadline}</span>
              </div>
              <div className="flex items-center gap-1">
                <Flag className="w-4 h-4" />
                <span>{task.progress}% done</span>
              </div>
            </div>

            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${task.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
