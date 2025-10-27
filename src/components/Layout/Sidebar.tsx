import {
  LayoutDashboard,
  CheckSquare,
  Users,
  Calendar,
  BarChart3,
  Settings,
  Sparkles,
  FolderKanban,
  Clock,
  Plus
} from 'lucide-react';

interface SidebarProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export function Sidebar({ activeView, onViewChange }: SidebarProps) {
  const navItems = [
    { id: 'ai-assistant', label: 'AI Assistant', icon: Sparkles, highlighted: true },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'tasks', label: 'My Tasks', icon: CheckSquare },
    { id: 'board', label: 'Board View', icon: FolderKanban },
    { id: 'timeline', label: 'Timeline', icon: Clock },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
    { id: 'groups', label: 'Groups', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col transition-colors duration-200">
      <div className="p-6 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">TaskFlow AI</h1>
        </div>

        <button
          onClick={() => onViewChange('ai-assistant')}
          className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-lg py-3 px-4 flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-xl hover:scale-105 mb-3 animate-pulse"
        >
          <Sparkles className="w-5 h-5" />
          <span className="font-semibold">Ask AI Assistant</span>
        </button>

        <button className="w-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg py-2.5 px-4 flex items-center justify-center gap-2 transition-all duration-200">
          <Plus className="w-4 h-4" />
          <span className="font-medium">New Task</span>
        </button>
      </div>

      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;

            return (
              <li key={item.id}>
                <button
                  onClick={() => onViewChange(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 relative ${
                    isActive
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  } ${item.highlighted ? 'font-semibold' : ''}`}
                >
                  <Icon className={`w-5 h-5 ${item.highlighted ? 'text-primary-500' : ''}`} />
                  <span className="font-medium">{item.label}</span>
                  {item.highlighted && !isActive && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
          <button
            onClick={() => onViewChange('settings')}
            className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 ${
              activeView === 'settings'
                ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            <Settings className="w-5 h-5" />
            <span className="font-medium">Settings</span>
          </button>
        </div>
      </nav>
    </aside>
  );
}
