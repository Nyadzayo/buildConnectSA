import React from 'react';
import { MessageSquare, Users, Clock, ThumbsUp, AlertCircle } from 'lucide-react';

export default function SupportDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Support Dashboard</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          New Ticket
        </button>
      </div>

      {/* Support Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Tickets</p>
              <h3 className="text-2xl font-bold text-gray-900">23</h3>
            </div>
            <MessageSquare className="h-8 w-8 text-blue-600" />
          </div>
          <div className="mt-4 flex items-center text-gray-500">
            <span className="text-sm">5 high priority</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Response Time</p>
              <h3 className="text-2xl font-bold text-gray-900">2.4 hrs</h3>
            </div>
            <Clock className="h-8 w-8 text-purple-600" />
          </div>
          <div className="mt-4 flex items-center text-green-600">
            <span className="text-sm">-18% from last week</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Resolution Rate</p>
              <h3 className="text-2xl font-bold text-gray-900">94%</h3>
            </div>
            <ThumbsUp className="h-8 w-8 text-green-600" />
          </div>
          <div className="mt-4 flex items-center text-green-600">
            <span className="text-sm">+2% from last week</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Customer Satisfaction</p>
              <h3 className="text-2xl font-bold text-gray-900">4.8/5</h3>
            </div>
            <Users className="h-8 w-8 text-orange-600" />
          </div>
          <div className="mt-4 flex items-center text-green-600">
            <span className="text-sm">+0.2 from last week</span>
          </div>
        </div>
      </div>

      {/* Active Tickets */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Active Support Tickets</h2>
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center
                              ${i === 0 ? 'bg-red-100' :
                                i === 1 ? 'bg-yellow-100' : 'bg-blue-100'}`}>
                  <AlertCircle className={`h-5 w-5 
                                      ${i === 0 ? 'text-red-600' :
                                        i === 1 ? 'text-yellow-600' : 'text-blue-600'}`} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">
                    {i === 0 ? 'Payment Issue' :
                     i === 1 ? 'Account Access' :
                     i === 2 ? 'Technical Support' :
                     i === 3 ? 'Feature Request' : 'General Inquiry'}
                  </p>
                  <p className="text-sm text-gray-500">Opened 2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className={`px-2 py-1 text-xs font-semibold rounded-full
                              ${i === 0 ? 'bg-red-100 text-red-800' :
                                i === 1 ? 'bg-yellow-100 text-yellow-800' :
                                'bg-blue-100 text-blue-800'}`}>
                  {i === 0 ? 'High' : i === 1 ? 'Medium' : 'Low'}
                </span>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}