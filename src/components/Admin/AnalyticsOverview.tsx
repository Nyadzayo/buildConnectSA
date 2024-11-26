import React from 'react';
import { 
  BarChart2, TrendingUp, Users, Briefcase, 
  DollarSign, Clock, ThumbsUp 
} from 'lucide-react';

export default function AnalyticsOverview() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Analytics Overview</h1>
        <div className="flex items-center space-x-2">
          <select className="px-4 py-2 border border-gray-300 rounded-lg">
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="90d">Last 90 Days</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Export Report
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Users</p>
              <h3 className="text-2xl font-bold text-gray-900">12,345</h3>
            </div>
            <Users className="h-8 w-8 text-blue-600" />
          </div>
          <div className="mt-4 flex items-center text-green-600">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span className="text-sm">+12.5% from last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Jobs</p>
              <h3 className="text-2xl font-bold text-gray-900">789</h3>
            </div>
            <Briefcase className="h-8 w-8 text-blue-600" />
          </div>
          <div className="mt-4 flex items-center text-green-600">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span className="text-sm">+8.3% from last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Monthly Revenue</p>
              <h3 className="text-2xl font-bold text-gray-900">R 234,567</h3>
            </div>
            <DollarSign className="h-8 w-8 text-blue-600" />
          </div>
          <div className="mt-4 flex items-center text-green-600">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span className="text-sm">+15.2% from last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Avg Response Time</p>
              <h3 className="text-2xl font-bold text-gray-900">2.4 hrs</h3>
            </div>
            <Clock className="h-8 w-8 text-blue-600" />
          </div>
          <div className="mt-4 flex items-center text-green-600">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span className="text-sm">-18.5% from last month</span>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">User Growth</h3>
          <div className="h-64 flex items-center justify-center border border-gray-200 rounded">
            <BarChart2 className="h-8 w-8 text-gray-400" />
            <span className="ml-2 text-gray-500">Chart Placeholder</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Breakdown</h3>
          <div className="h-64 flex items-center justify-center border border-gray-200 rounded">
            <BarChart2 className="h-8 w-8 text-gray-400" />
            <span className="ml-2 text-gray-500">Chart Placeholder</span>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <ThumbsUp className="h-5 w-5 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">New contractor registration</p>
                  <p className="text-sm text-gray-500">2 minutes ago</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-700 text-sm">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}