import { ThemeProvider } from './contexts/ThemeContext';
import { MainLayout } from './components/Layout/MainLayout';
import { Dashboard } from './components/Dashboard/Dashboard';
import { TaskList } from './components/Tasks/TaskList';
import { BoardView } from './components/Tasks/BoardView';
import { TimelineView } from './components/Tasks/TimelineView';
import { CalendarView } from './components/Calendar/CalendarView';
import { GroupsView } from './components/Groups/GroupsView';
import { AIAssistant } from './components/AI/AIAssistant';
import { AnalyticsView } from './components/Analytics/AnalyticsView';
import { SettingsView } from './components/Settings/SettingsView';
import { AuthScreen } from './components/Auth/AuthScreen';
function App() {
  const renderView = (activeView: string, onNavigate: (view: string) => void) => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard onNavigate={onNavigate} />;
      case 'tasks':
        return <TaskList />;
      case 'board':
        return <BoardView />;
      case 'timeline':
        return <TimelineView />;
      case 'calendar':
        return <CalendarView />;
      case 'groups':
        return <GroupsView />;
      case 'ai-assistant':
        return <AIAssistant />;
      case 'analytics':
        return <AnalyticsView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <Dashboard onNavigate={onNavigate} />;
    }
  };

  return (
    <ThemeProvider>
      <MainLayout>
        {(activeView, onNavigate) => renderView(activeView, onNavigate)}
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
