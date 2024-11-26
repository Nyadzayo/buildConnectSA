import React from 'react';
import { Server, Database, Activity, Cpu, Memory, AlertTriangle } from 'lucide-react';

export default function SystemMonitoring() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">System Monitoring</h1>
        <div className="flex gap-2">
          <span className="flex items-center text-green-600">
            <span className="h-2 w-2 bg-green-600 rounded-full mr-2"></span>
            All Systems Operational
          </span>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            View Logs
          </button>
        </div>
      </div>

      {/* System Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Server className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Server Status</h3>
            </div>
            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
              Healthy
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Uptime</span>
              <span className="text-gray-900">99.99%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Response Time</span>
              <span className="text-gray-900">124ms</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Database className="h-6 w-6 text-purple-600 mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">Database</h3>
            </div>
            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
              Operational
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Query Time</span>
              <span className="text-gray-900">45ms</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Active Connections</span>
              <span className="text-gray-900">234</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Activity className="h-6 w-6 text-green-600 mr-2" <boltAction type="file" filePath="src/components/Admin/SystemMonitoring.tsx">              />
              <h3 className="text-lg font-semibold text-gray-900">API Health</h3>
            </div>
            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
              Healthy
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Success Rate</span>
              <span className="text-gray-900">99.8%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Error Rate</span>
              <span className="text-gray-900">0.2%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Resource Usage */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-4">
            <Cpu className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">CPU Usage</h3>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-500">Current Usage</span>
                <span className="text-gray-900">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-500">Average Load</span>
                <span className="text-gray-900">38%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '38%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center mb-4">
            <Memory className="h-6 w-6 text-purple-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Memory Usage</h3>
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-500">Used Memory</span>
                <span className="text-gray-900">6.2 GB / 8 GB</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '77.5%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-500">Swap Usage</span>
                <span className="text-gray-900">1.1 GB / 4 GB</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '27.5%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent System Alerts */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent System Alerts</h2>
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center
                              ${i === 0 ? 'bg-red-100' :
                                i === 1 ? 'bg-yellow-100' : 'bg-blue-100'}`}>
                  <AlertTriangle className={`h-5 w-5 
                                        ${i === 0 ? 'text-red-600' :
                                          i === 1 ? 'text-yellow-600' : 'text-blue-600'}`} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">
                    {i === 0 ? 'High Memory Usage Detected' :
                     i === 1 ? 'Database Connection Spike' :
                     i === 2 ? 'API Response Time Increased' :
                     i === 3 ? 'CPU Usage Above 80%' : 'SSL Certificate Expiring Soon'}
                  </p>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className={`px-2 py-1 text-xs font-semibold rounded-full
                              ${i === 0 ? 'bg-red-100 text-red-800' :
                                i === 1 ? 'bg-yellow-100 text-yellow-800' :
                                'bg-blue-100 text-blue-800'}`}>
                  {i === 0 ? 'Critical' : i === 1 ? 'Warning' : 'Info'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}