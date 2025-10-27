import { X, CheckCircle2, AlertCircle, Info, UserPlus, MessageSquare } from 'lucide-react';

interface NotificationCenterProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NotificationCenter({ isOpen, onClose }: NotificationCenterProps) {
  if (!isOpen) return null;

  const notifications = [
    {
      id: 1,
      type: 'success',
      icon: CheckCircle2,
      title: 'Task Completed',
      message: 'Design review meeting has been completed',
      time: '5 minutes ago',
      unread: true,
    },
    {
      id: 2,
      type: 'info',
      icon: Info,
      title: 'New Comment',
      message: 'Sarah commented on "Project proposal"',
      time: '1 hour ago',
      unread: true,
    },
    {
      id: 3,
      type: 'warning',
      icon: AlertCircle,
      title: 'Deadline Approaching',
      message: 'Client presentation is due in 2 hours',
      time: '2 hours ago',
      unread: true,
    },
    {
      id: 4,
      type: 'info',
      icon: UserPlus,
      title: 'Team Update',
      message: 'John Doe joined the Development team',
      time: '3 hours ago',
      unread: false,
    },
    {
      id: 5,
      type: 'info',
      icon: MessageSquare,
      title: 'New Message',
      message: 'You have 3 new messages in Marketing group',
      time: '5 hours ago',
      unread: false,
    },
  ];

  const typeStyles = {
    success: 'text-success-500 bg-success-50 dark:bg-success-900/20',
    warning: 'text-warning-500 bg-warning-50 dark:bg-warning-900/20',
    info: 'text-primary-500 bg-primary-50 dark:bg-primary-900/20',
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-end z-50 p-4 animate-fade-in">
      <div className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-md max-h-[90vh] overflow-hidden border border-gray-200 dark:border-gray-800 animate-slide-in">
        <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Notifications</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              You have {notifications.filter((n) => n.unread).length} unread notifications
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
          {notifications.map((notification) => {
            const Icon = notification.icon;
            return (
              <div
                key={notification.id}
                className={`p-4 border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer ${
                  notification.unread ? 'bg-primary-50/30 dark:bg-primary-900/10' : ''
                }`}
              >
                <div className="flex gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      typeStyles[notification.type as keyof typeof typeStyles]
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                        {notification.title}
                      </h4>
                      {notification.unread && (
                        <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0 mt-1"></div>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                      {notification.time}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="sticky bottom-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 p-4">
          <button className="w-full py-2.5 text-primary-500 font-medium hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-all duration-200">
            Mark All as Read
          </button>
        </div>
      </div>
    </div>
  );
}
