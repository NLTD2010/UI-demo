import { Plus, MoreVertical, Calendar, Flag } from 'lucide-react';

export function BoardView() {
  const columns = [
    {
      id: 'todo',
      title: 'To Do',
      count: 5,
      color: 'border-t-gray-400',
      tasks: [
        {
          id: 1,
          title: 'Design system updates',
          description: 'Update color palette and typography',
          priority: 'Medium',
          dueDate: 'Dec 28',
          tags: ['Design'],
          assignees: 2,
        },
        {
          id: 2,
          title: 'API integration',
          description: 'Connect frontend with backend services',
          priority: 'High',
          dueDate: 'Dec 25',
          tags: ['Development'],
          assignees: 3,
        },
      ],
    },
    {
      id: 'in-progress',
      title: 'In Progress',
      count: 3,
      color: 'border-t-primary-500',
      tasks: [
        {
          id: 3,
          title: 'User authentication',
          description: 'Implement OAuth and social login',
          priority: 'High',
          dueDate: 'Dec 26',
          tags: ['Development', 'Security'],
          assignees: 2,
        },
      ],
    },
    {
      id: 'review',
      title: 'Review',
      count: 2,
      color: 'border-t-warning-500',
      tasks: [
        {
          id: 4,
          title: 'Code review',
          description: 'Review pull requests from team',
          priority: 'Medium',
          dueDate: 'Dec 24',
          tags: ['Development'],
          assignees: 1,
        },
      ],
    },
    {
      id: 'done',
      title: 'Done',
      count: 8,
      color: 'border-t-success-500',
      tasks: [
        {
          id: 5,
          title: 'Database migration',
          description: 'Migrate to new database schema',
          priority: 'High',
          dueDate: 'Dec 20',
          tags: ['Backend'],
          assignees: 2,
        },
        {
          id: 6,
          title: 'Documentation update',
          description: 'Update API documentation',
          priority: 'Low',
          dueDate: 'Dec 19',
          tags: ['Documentation'],
          assignees: 1,
        },
      ],
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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Board View</h1>
          <p className="text-gray-600 dark:text-gray-400">Organize tasks in Kanban style</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {columns.map((column) => (
          <div
            key={column.id}
            className="bg-gray-50 dark:bg-gray-900/50 rounded-xl p-4 border border-gray-200 dark:border-gray-800"
          >
            <div className={`border-t-4 ${column.color} rounded-t-lg mb-4 -mt-4 -mx-4 px-4 pt-4`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{column.title}</h3>
                  <span className="px-2 py-0.5 bg-gray-200 dark:bg-gray-800 rounded-full text-xs font-medium text-gray-600 dark:text-gray-400">
                    {column.count}
                  </span>
                </div>
                <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-800 rounded transition-colors">
                  <Plus className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {column.tasks.map((task) => (
                <div
                  key={task.id}
                  className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-800 hover:shadow-md transition-all duration-200 cursor-move"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                      {task.title}
                    </h4>
                    <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors">
                      <MoreVertical className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>

                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                    {task.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2 py-0.5 rounded text-xs font-medium ${
                          priorityColors[task.priority as keyof typeof priorityColors]
                        }`}
                      >
                        <Flag className="w-3 h-3 inline mr-1" />
                        {task.priority}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400">
                      <Calendar className="w-3 h-3" />
                      <span>{task.dueDate}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex gap-1">
                      {task.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex -space-x-2">
                      {[...Array(task.assignees)].map((_, i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-2 border-white dark:border-gray-900"
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors flex items-center justify-center gap-2">
              <Plus className="w-4 h-4" />
              Add Task
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
