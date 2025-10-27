import { TrendingUp, Target, Clock, Award } from 'lucide-react';

export function AnalyticsView() {
  const metrics = [
    {
      title: 'Completion Rate',
      value: '87%',
      change: '+12%',
      changeType: 'positive',
      icon: Target,
      color: 'text-success-500',
    },
    {
      title: 'Average Time',
      value: '2.4h',
      change: '-15%',
      changeType: 'positive',
      icon: Clock,
      color: 'text-primary-500',
    },
    {
      title: 'Productivity Score',
      value: '94',
      change: '+8',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'text-warning-500',
    },
    {
      title: 'Tasks Completed',
      value: '248',
      change: '+23',
      changeType: 'positive',
      icon: Award,
      color: 'text-purple-500',
    },
  ];

  const monthlyData = [
    { month: 'Jan', completed: 45, target: 50 },
    { month: 'Feb', completed: 52, target: 55 },
    { month: 'Mar', completed: 48, target: 50 },
    { month: 'Apr', completed: 60, target: 60 },
    { month: 'May', completed: 55, target: 60 },
    { month: 'Jun', completed: 65, target: 65 },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Analytics</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Track your productivity and performance metrics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-lg ${metric.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <span
                  className={`text-sm font-medium ${
                    metric.changeType === 'positive' ? 'text-success-500' : 'text-danger-500'
                  }`}
                >
                  {metric.change}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{metric.title}</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{metric.value}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Monthly Performance
          </h3>

          <div className="space-y-4">
            {monthlyData.map((data) => (
              <div key={data.month}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {data.month}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {data.completed}/{data.target} tasks
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary-500 to-primary-400 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(data.completed / data.target) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Task Distribution
          </h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-success-500 rounded"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">Completed</span>
              </div>
              <span className="text-sm font-medium text-gray-900 dark:text-white">248 (62%)</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-primary-500 rounded"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">In Progress</span>
              </div>
              <span className="text-sm font-medium text-gray-900 dark:text-white">98 (25%)</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-warning-500 rounded"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">Pending</span>
              </div>
              <span className="text-sm font-medium text-gray-900 dark:text-white">35 (9%)</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-danger-500 rounded"></div>
                <span className="text-sm text-gray-700 dark:text-gray-300">Overdue</span>
              </div>
              <span className="text-sm font-medium text-gray-900 dark:text-white">19 (4%)</span>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between h-8 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                <div className="h-full bg-success-500" style={{ width: '62%' }}></div>
                <div className="h-full bg-primary-500" style={{ width: '25%' }}></div>
                <div className="h-full bg-warning-500" style={{ width: '9%' }}></div>
                <div className="h-full bg-danger-500" style={{ width: '4%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
