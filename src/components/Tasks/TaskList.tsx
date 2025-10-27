import { Calendar, Flag, MoreVertical, CheckCircle2, Circle } from 'lucide-react';

export function TaskList() {
  const tasks = [
    {
      id: 1,
      title: 'Design new landing page',
      description: 'Create mockups and wireframes for the new marketing site',
      priority: 'High',
      dueDate: 'Today',
      status: 'in-progress',
      tags: ['Design', 'Marketing'],
    },
    {
      id: 2,
      title: 'Review pull requests',
      description: 'Check and approve pending code reviews',
      priority: 'Medium',
      dueDate: 'Tomorrow',
      status: 'pending',
      tags: ['Development'],
    },
    {
      id: 3,
      title: 'Update documentation',
      description: 'Add API documentation for new endpoints',
      priority: 'Low',
      dueDate: 'Next Week',
      status: 'pending',
      tags: ['Documentation'],
    },
    {
      id: 4,
      title: 'Team meeting preparation',
      description: 'Prepare slides for weekly team sync',
      priority: 'High',
      dueDate: 'Today',
      status: 'completed',
      tags: ['Meeting'],
    },
  ];

  const priorityColors = {
    High: 'text-danger-500 bg-danger-50 dark:bg-danger-900/20',
    Medium: 'text-warning-500 bg-warning-50 dark:bg-warning-900/20',
    Low: 'text-primary-500 bg-primary-50 dark:bg-primary-900/20',
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">My Tasks</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage and organize your tasks</p>
        </div>
        <div className="flex items-center gap-3">
          <select className="px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option>All Tasks</option>
            <option>Active</option>
            <option>Completed</option>
            <option>Overdue</option>
          </select>
          <select className="px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500">
            <option>Sort by: Due Date</option>
            <option>Priority</option>
            <option>Created Date</option>
            <option>Alphabetical</option>
          </select>
        </div>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-800 hover:shadow-md transition-all duration-200 ${
              task.status === 'completed' ? 'opacity-60' : ''
            }`}
          >
            <div className="flex items-start gap-4">
              <button className="mt-1">
                {task.status === 'completed' ? (
                  <CheckCircle2 className="w-5 h-5 text-success-500" />
                ) : (
                  <Circle className="w-5 h-5 text-gray-400 hover:text-primary-500 transition-colors" />
                )}
              </button>

              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3
                      className={`font-semibold text-gray-900 dark:text-white ${
                        task.status === 'completed' ? 'line-through' : ''
                      }`}
                    >
                      {task.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {task.description}
                    </p>
                  </div>
                  <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors">
                    <MoreVertical className="w-5 h-5 text-gray-400" />
                  </button>
                </div>

                <div className="flex items-center gap-4 mt-3">
                  <span
                    className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                      priorityColors[task.priority as keyof typeof priorityColors]
                    }`}
                  >
                    <Flag className="w-3 h-3 inline mr-1" />
                    {task.priority}
                  </span>

                  <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{task.dueDate}</span>
                  </div>

                  <div className="flex gap-2">
                    {task.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
