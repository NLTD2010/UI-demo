import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

interface MainLayoutProps {
  children: (activeView: string, onNavigate: (view: string) => void) => React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [activeView, setActiveView] = useState('dashboard');

  return (
    <div className="h-screen flex bg-gray-50 dark:bg-gray-950 transition-colors duration-200">
      <Sidebar activeView={activeView} onViewChange={setActiveView} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onAIClick={() => setActiveView('ai-assistant')} />

        <main className="flex-1 overflow-y-auto p-6">
          {children(activeView, setActiveView)}
        </main>
      </div>
    </div>
  );
}
