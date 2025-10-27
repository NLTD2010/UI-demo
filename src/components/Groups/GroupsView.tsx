import { Users, Plus, MoreVertical, TrendingUp, Clock, CheckCircle2 } from 'lucide-react';

export function GroupsView() {
  const groups = [
    {
      id: 1,
      name: 'Design Team',
      description: 'UI/UX design and creative projects',
      members: 8,
      activeTasks: 12,
      completionRate: 85,
      color: 'bg-purple-500',
      recentActivity: '2 hours ago',
    },
    {
      id: 2,
      name: 'Development',
      description: 'Frontend and backend development',
      members: 15,
      activeTasks: 24,
      completionRate: 78,
      color: 'bg-blue-500',
      recentActivity: '30 minutes ago',
    },
    {
      id: 3,
      name: 'Marketing',
      description: 'Marketing campaigns and content',
      members: 6,
      activeTasks: 8,
      completionRate: 92,
      color: 'bg-green-500',
      recentActivity: '1 hour ago',
    },
    {
      id: 4,
      name: 'Product Management',
      description: 'Product strategy and roadmap',
      members: 4,
      activeTasks: 6,
      completionRate: 88,
      color: 'bg-orange-500',
      recentActivity: '3 hours ago',
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Groups</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Collaborate with your teams and manage group tasks
          </p>
        </div>
        <button className="bg-primary-500 hover:bg-primary-600 text-white rounded-lg px-4 py-2.5 flex items-center gap-2 transition-all duration-200 hover:shadow-lg">
          <Plus className="w-4 h-4" />
          Create Group
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {groups.map((group) => (
          <div
            key={group.id}
            className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 ${group.color} rounded-lg flex items-center justify-center`}>
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {group.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{group.description}</p>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                <MoreVertical className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                  <Users className="w-4 h-4" />
                  <span className="text-xs">Members</span>
                </div>
                <p className="text-xl font-bold text-gray-900 dark:text-white">{group.members}</p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs">Active</span>
                </div>
                <p className="text-xl font-bold text-gray-900 dark:text-white">
                  {group.activeTasks}
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-1">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-xs">Rate</span>
                </div>
                <p className="text-xl font-bold text-success-500">{group.completionRate}%</p>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-600 dark:text-gray-400">Completion Rate</span>
                <span className="font-medium text-gray-900 dark:text-white">
                  {group.completionRate}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-success-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${group.completionRate}%` }}
                ></div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
              <div className="flex -space-x-2">
                {[...Array(Math.min(group.members, 5))].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-2 border-white dark:border-gray-900"
                  ></div>
                ))}
                {group.members > 5 && (
                  <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700 border-2 border-white dark:border-gray-900 flex items-center justify-center text-xs font-medium text-gray-700 dark:text-gray-300">
                    +{group.members - 5}
                  </div>
                )}
              </div>

              <div className="text-xs text-gray-500 dark:text-gray-400">
                Updated {group.recentActivity}
              </div>
            </div>

            <button className="w-full mt-4 py-2.5 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200">
              View Group
            </button>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Group Performance Analysis
        </h3>

        <div className="space-y-4">
          {groups.map((group) => (
            <div key={group.id} className="flex items-center gap-4">
              <div className={`w-10 h-10 ${group.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <Users className="w-5 h-5 text-white" />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-gray-900 dark:text-white">{group.name}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {group.activeTasks} active tasks
                  </span>
                </div>

                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className={`${group.color} h-2 rounded-full transition-all duration-300`}
                    style={{ width: `${group.completionRate}%` }}
                  ></div>
                </div>
              </div>

              <div className="text-right">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {group.completionRate}%
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">completion</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
