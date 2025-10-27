import { Bell, Search, Sun, Moon, User, Sparkles } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { NotificationCenter } from '../Notifications/NotificationCenter';
import { useState } from 'react';
interface HeaderProps {
  onAIClick?: () => void;
}

export function Header({ onAIClick }: HeaderProps = {}) {
  const { theme, toggleTheme } = useTheme();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const onNotificationClick = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };
  return (
    <header className="h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-6 transition-colors duration-200">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Type '/' for AI commands or search tasks..."
            className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border-0 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors duration-200"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 ml-6">
        <button
          onClick={onAIClick}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-lg transition-all duration-200 hover:shadow-lg font-medium"
        >
          <Sparkles className="w-4 h-4" />
          <span className="hidden sm:inline">Ask AI</span>
        </button>

        <button
          onClick={toggleTheme}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <Moon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          ) : (
            <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          )}
        </button>

        <button onClick={onNotificationClick} className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-200">
          <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-danger-500 rounded-full"></span>
        </button>

        <div className="w-px h-6 bg-gray-200 dark:bg-gray-700"></div>

        <button className="flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg px-3 py-2 transition-all duration-200">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <div className="text-left hidden md:block">
            <p className="text-sm font-medium text-gray-900 dark:text-white">John Doe</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">john@example.com</p>
          </div>
        </button>
      </div>
      <NotificationCenter onClose={onNotificationClick} isOpen={isNotificationOpen}/>
    </header>
  );
}
