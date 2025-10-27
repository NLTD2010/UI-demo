import { Sparkles, TrendingUp, AlertCircle, Lightbulb } from 'lucide-react';

export function AIInsights() {
  const insights = [
    {
      type: 'success',
      icon: TrendingUp,
      title: 'Productivity Boost',
      message: 'You completed 23% more tasks this week. Keep it up!',
      color: 'text-success-500',
      bgColor: 'bg-success-50 dark:bg-success-900/20',
    },
    {
      type: 'warning',
      icon: AlertCircle,
      title: 'Deadline Alert',
      message: '5 high-priority tasks are due within 48 hours.',
      color: 'text-warning-500',
      bgColor: 'bg-warning-50 dark:bg-warning-900/20',
    },
    {
      type: 'suggestion',
      icon: Lightbulb,
      title: 'Smart Suggestion',
      message: 'Consider grouping similar tasks together for better focus.',
      color: 'text-primary-500',
      bgColor: 'bg-primary-50 dark:bg-primary-900/20',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-5 h-5 text-primary-500" />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">AI Insights</h3>
      </div>

      <div className="space-y-4">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <div
              key={index}
              className={`p-4 rounded-lg ${insight.bgColor} border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:scale-102`}
            >
              <div className="flex gap-3">
                <div className={`${insight.color} mt-1`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {insight.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{insight.message}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button className="w-full mt-4 py-2.5 border border-primary-500 text-primary-500 rounded-lg font-medium hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-200">
        View All Insights
      </button>
    </div>
  );
}
