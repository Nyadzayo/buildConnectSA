import React from 'react';
import { 
  BarChart2, Users, Briefcase, DollarSign, 
  Headphones, Settings, LogOut, Shield 
} from 'lucide-react';
import { AdminUser } from '../../types/admin';

interface AdminSidebarProps {
  currentView: string;
  onViewChange: (view: string) => void;
  admin: AdminUser;
}

export default function AdminSidebar({ currentView, onViewChange, admin }: AdminSidebarProps) {
  const menuItems = [
    { id: 'analytics', label: 'Analytics', icon: BarChart2 },
    { id: 'users', label: 'User Management', icon: Users },
    { id: 'jobs', label: 'Job Management', icon: Briefcase },
    { id: 'financial', label: 'Financial', icon: DollarSign },
    { id: 'support', label: 'Support', icon: Headphones },
    { id: 'system', label: 'System', icon: Settings }
  ];

  return (
    <div className="w-64 bg-gray-900 text-white">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-blue-400" />
          <span className="text-xl font-bold">Admin Panel</span>
        </div>
      </div>

      <nav className="mt-6">
        {menuItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => onViewChange(id)}
            className={`w-full flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 
                     hover:text-white transition-colors ${
              currentView === id ? 'bg-gray-800 text-white' : ''
            }`}
          >
            <Icon className="h-5 w-5 mr-3" />
            {label}
          </button>
        ))}
      </nav>

      <div className="absolute bottom-0 w-64 p-6">
        <div className="border-t border-gray-800 pt-4">
          <div className="text-sm">
            <div className="font-medium text-gray-300">{admin.name}</div>
            <div className="text-gray-500">{admin.role}</div>
          </div>
          <button className="mt-4 flex items-center text-gray-300 hover:text-white">
            <LogOut className="h-5 w-5 mr-2" />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}