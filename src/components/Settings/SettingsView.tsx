import { User, Bell, Lock, Palette, Globe, Download, Trash2, Calendar } from 'lucide-react';
export function SettingsView() {
  const settingsSections = [
    {
      id: 'profile',
      icon: User,
      title: 'Profile Settings',
      description: 'Manage your personal information',
    },
    {
      id: 'notifications',
      icon: Bell,
      title: 'Notifications',
      description: 'Configure notification preferences',
    },
    {
      id: 'security',
      icon: Lock,
      title: 'Security & Privacy',
      description: 'Password and security settings',
    },
    {
      id: 'appearance',
      icon: Palette,
      title: 'Appearance',
      description: 'Customize theme and display',
    },
    {
      id: 'integrations',
      icon: Globe,
      title: 'Integrations',
      description: 'Connect third-party services',
    },
    {
      id: 'data',
      icon: Download,
      title: 'Data & Export',
      description: 'Export and manage your data',
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Settings</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-4">
            <nav className="space-y-1">
              {settingsSections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{section.title}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Profile Information
            </h3>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                  <User className="w-10 h-10 text-white" />
                </div>
                <div>
                  <button className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg text-sm font-medium transition-all duration-200">
                    Change Photo
                  </button>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                    JPG, PNG or GIF. Max size 2MB
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    defaultValue="John"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Doe"
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="john@example.com"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  defaultValue="johndoe"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              <button className="w-full bg-primary-500 hover:bg-primary-600 text-white rounded-lg py-3 font-medium transition-all duration-200 hover:shadow-lg">
                Save Changes
              </button>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Notification Preferences
            </h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-800">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Email Notifications</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Receive email updates about your tasks
                  </p>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                />
              </div>

              <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-800">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Push Notifications</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Get push notifications on your devices
                  </p>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                />
              </div>

              <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-800">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Task Reminders</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Remind me about upcoming deadlines
                  </p>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Team Updates</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Get notified about team activity
                  </p>
                </div>
                <input
                  type="checkbox"
                  className="w-4 h-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                />
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Integrations
            </h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white dark:bg-gray-900 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Google Calendar</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Sync tasks with calendar
                    </p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg text-sm font-medium transition-all duration-200">
                  Connect
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white dark:bg-gray-900 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Notion</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Import/export to Notion
                    </p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg text-sm font-medium transition-all duration-200">
                  Connect
                </button>
              </div>
            </div>
          </div>

          <div className="bg-danger-50 dark:bg-danger-900/20 border border-danger-200 dark:border-danger-800 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <Trash2 className="w-5 h-5 text-danger-500 mt-0.5" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Delete Account
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Permanently delete your account and all associated data. This action cannot be
                  undone.
                </p>
                <button className="px-4 py-2 bg-danger-500 hover:bg-danger-600 text-white rounded-lg text-sm font-medium transition-all duration-200">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
