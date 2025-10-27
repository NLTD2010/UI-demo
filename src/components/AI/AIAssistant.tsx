import { Sparkles, Send, Calendar, TrendingUp, Lightbulb, Zap } from 'lucide-react';

export function AIAssistant() {
  const suggestions = [
    {
      icon: Calendar,
      title: 'Generate Weekly Schedule',
      description: 'Create an optimized schedule based on your tasks and priorities',
      action: 'Generate Schedule',
    },
    {
      icon: TrendingUp,
      title: 'Analyze Productivity',
      description: 'Get insights on your work patterns and improvement areas',
      action: 'View Analysis',
    },
    {
      icon: Lightbulb,
      title: 'Task Prioritization',
      description: 'Let AI prioritize your tasks based on deadlines and complexity',
      action: 'Prioritize Tasks',
    },
    {
      icon: Zap,
      title: 'Quick Actions',
      description: 'Automate repetitive tasks and save time',
      action: 'See Actions',
    },
  ];

  const chatHistory = [
    {
      type: 'ai',
      message: 'Hello! I can help you optimize your schedule, prioritize tasks, and provide productivity insights. What would you like to do today?',
      time: '10:30 AM',
    },
    {
      type: 'user',
      message: 'Can you help me organize my tasks for this week?',
      time: '10:31 AM',
    },
    {
      type: 'ai',
      message: 'I analyzed your current tasks and created an optimized schedule. You have 15 tasks due this week. I recommend focusing on high-priority items first. Would you like me to generate a detailed schedule?',
      time: '10:31 AM',
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-8 h-8 text-primary-500" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">AI Assistant</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Let AI help you plan, prioritize, and optimize your workflow
          </p>
        </div>

        <button className="px-4 py-2 bg-primary-50 dark:bg-primary-900/20 text-primary-500 rounded-lg font-medium hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-all duration-200">
          AI Settings
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {suggestions.map((suggestion, index) => {
          const Icon = suggestion.icon;
          return (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer"
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-primary-500" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                {suggestion.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {suggestion.description}
              </p>
              <button className="text-sm text-primary-500 font-medium hover:text-primary-600">
                {suggestion.action} →
              </button>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 flex flex-col h-[600px]">
          <div className="p-6 border-b border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Chat with AI</h3>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] ${
                    chat.type === 'user'
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                  } rounded-2xl px-4 py-3`}
                >
                  <p className="text-sm">{chat.message}</p>
                  <p
                    className={`text-xs mt-1 ${
                      chat.type === 'user' ? 'text-primary-100' : 'text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    {chat.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 border-t border-gray-200 dark:border-gray-800">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Ask AI anything..."
                className="flex-1 px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="bg-primary-500 hover:bg-primary-600 text-white rounded-lg px-6 py-3 flex items-center gap-2 transition-all duration-200 hover:shadow-lg">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Recent Insights
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-success-50 dark:bg-success-900/20 rounded-lg border border-success-200 dark:border-success-800">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-success-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1">
                      Productivity Up
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      You completed 23% more tasks this week
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-primary-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1">
                      Smart Suggestion
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Group similar tasks together for better focus
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-warning-50 dark:bg-warning-900/20 rounded-lg border border-warning-200 dark:border-warning-800">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-warning-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-1">
                      Schedule Optimization
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Move 3 low-priority tasks to next week
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              AI Settings
            </h3>
            <div className="space-y-4">
              <label className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Auto-prioritize tasks
                </span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                />
              </label>

              <label className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Smart scheduling
                </span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                />
              </label>

              <label className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Weekly insights
                </span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                />
              </label>

              <label className="flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Task suggestions
                </span>
                <input
                  type="checkbox"
                  className="w-4 h-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
