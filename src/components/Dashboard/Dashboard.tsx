import { CheckSquare, Clock, Users, TrendingUp, Sparkles, ArrowRight } from 'lucide-react';
import { StatCard } from './StatCard';
import { FocusSection } from './FocusSection';
import { ProductivityChart } from './ProductivityChart';
import { AIInsights } from './AIInsights';
import { UpcomingSchedule } from './UpcomingSchedule';

interface DashboardProps {
  onNavigate?: (view: string) => void;
}

export function Dashboard({ onNavigate }: DashboardProps = {}) {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
        onClick={() => onNavigate?.('ai-assistant')}
      >
      <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <Sparkles className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">AI Assistant Ready</h3>
                <p className="text-primary-100 text-sm">Your intelligent planning partner</p>
              </div>
            </div>
            <p className="text-white/90 mb-4 text-sm leading-relaxed">
              Get AI-powered schedule optimization, task prioritization, and productivity insights. Let AI help you work smarter.
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <span>Start Planning with AI</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="w-32 h-32 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
              <Sparkles className="w-16 h-16 text-white/80" />
            </div>
          </div>
        </div>
      </div> */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Welcome back, John!
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Here's what's happening with your tasks today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Tasks"
          value={127}
          change="+12% from last week"
          changeType="positive"
          icon={CheckSquare}
          color="blue"
        />
        <StatCard
          title="Completed"
          value={98}
          change="+8% from last week"
          changeType="positive"
          icon={TrendingUp}
          color="green"
        />
        <StatCard
          title="In Progress"
          value={23}
          change="4 due today"
          changeType="neutral"
          icon={Clock}
          color="orange"
        />
        <StatCard
          title="Team Members"
          value={42}
          change="3 active now"
          changeType="positive"
          icon={Users}
          color="blue"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
            <UpcomingSchedule />
        </div>
        <div className="lg:col-span-2">
          <FocusSection />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProductivityChart />
        <AIInsights />
      </div>
    </div>
  );
}
