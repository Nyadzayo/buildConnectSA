import React, { useState } from 'react';
import { AdminUser, DashboardMetrics, SystemHealth } from '../../types/admin';
import AdminSidebar from './AdminSidebar';
import AnalyticsOverview from './AnalyticsOverview';
import UserManagement from './UserManagement';
import JobManagement from './JobManagement';
import FinancialDashboard from './FinancialDashboard';
import SupportDashboard from './SupportDashboard';
import SystemMonitoring from './SystemMonitoring';

type AdminView = 
  | 'analytics'
  | 'users'
  | 'jobs'
  | 'financial'
  | 'support'
  | 'system';

export default function AdminDashboard() {
  const [currentView, setCurrentView] = useState<AdminView>('analytics');
  const [admin] = useState<AdminUser>({
    id: '1',
    email: 'admin@buildconnect.co.za',
    role: 'SUPER_ADMIN',
    name: 'System Administrator',
    permissions: ['ALL'],
    mfaEnabled: true
  });

  const renderView = () => {
    switch (currentView) {
      case 'analytics':
        return <AnalyticsOverview />;
      case 'users':
        return <UserManagement />;
      case 'jobs':
        return <JobManagement />;
      case 'financial':
        return <FinancialDashboard />;
      case 'support':
        return <SupportDashboard />;
      case 'system':
        return <SystemMonitoring />;
      default:
        return <AnalyticsOverview />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar 
        currentView={currentView}
        onViewChange={setCurrentView}
        admin={admin}
      />
      <main className="flex-1 overflow-y-auto">
        <div className="p-6">
          {renderView()}
        </div>
      </main>
    </div>
  );
}