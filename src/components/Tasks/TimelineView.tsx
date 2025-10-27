import { Calendar, Clock, Users, ChevronLeft, ChevronRight } from 'lucide-react';

export function TimelineView() {
  const timelineData = [
    {
      id: 1,
      title: 'Project Kickoff',
      type: 'milestone',
      date: 'Dec 20',
      time: '10:00 AM',
      description: 'Initial project planning and team alignment',
      color: 'bg-primary-500',
      team: 8,
    },
    {
      id: 2,
      title: 'Design Phase',
      type: 'phase',
      date: 'Dec 21 - Dec 25',
      description: 'UI/UX design and prototyping',
      color: 'bg-purple-500',
      progress: 75,
      team: 3,
    },
    {
      id: 3,
      title: 'Development Sprint 1',
      type: 'phase',
      date: 'Dec 26 - Jan 2',
      description: 'Core feature implementation',
      color: 'bg-blue-500',
      progress: 40,
      team: 6,
    },
    {
      id: 4,
      title: 'Code Review',
      type: 'milestone',
      date: 'Jan 3',
      time: '02:00 PM',
      description: 'Team code review session',
      color: 'bg-warning-500',
      team: 5,
    },
    {
      id: 5,
      title: 'Testing Phase',
      type: 'phase',
      date: 'Jan 4 - Jan 8',
      description: 'QA testing and bug fixes',
      color: 'bg-green-500',
      progress: 0,
      team: 4,
    },
    {
      id: 6,
      title: 'Launch',
      type: 'milestone',
      date: 'Jan 10',
      time: '09:00 AM',
      description: 'Product launch and deployment',
      color: 'bg-danger-500',
      team: 10,
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Timeline</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Track project milestones and deadlines
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
            <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
          <span className="px-4 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300 font-medium">
            December 2024
          </span>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
            <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800">
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-purple-500 to-danger-500"></div>

          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <div key={item.id} className="relative pl-20">
                <div
                  className={`absolute left-5 w-6 h-6 ${item.color} rounded-full border-4 border-white dark:border-gray-900 shadow-lg`}
                ></div>

                <div
                  className={`bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-200 ${
                    index === 1 || index === 2 ? 'border-l-4 border-l-primary-500' : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <span
                          className={`px-2 py-1 ${item.color} bg-opacity-20 text-xs font-medium rounded-full`}
                        >
                          {item.type === 'milestone' ? 'Milestone' : 'Phase'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>

                    {item.time && (
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{item.time}</span>
                      </div>
                    )}

                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{item.team} members</span>
                    </div>
                  </div>

                  {item.progress !== undefined && (
                    <div className="mt-4">
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-gray-600 dark:text-gray-400">Progress</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {item.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`${item.color} h-2 rounded-full transition-all duration-300`}
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
