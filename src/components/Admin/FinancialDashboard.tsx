import React from 'react';
import { DollarSign, TrendingUp, CreditCard, Wallet, ArrowUpRight } from 'lucide-react';

export default function FinancialDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Financial Dashboard</h1>
        <div className="flex gap-2">
          <select className="px-4 py-2 border border-gray-300 rounded-lg">
            <option value="thisMonth">This Month</option>
            <option value="lastMonth">Last Month</option>
            <option value="thisYear">This Year</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Download Report
          </button>
        </div>
      </div>

      {/* Revenue Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Revenue</p>
              <h3 className="text-2xl font-bold text-gray-900">R 1,234,567</h3>
            </div>
            <DollarSign className="h-8 w-8 text-blue-600" />
          </div>
          <div className="mt-4 flex items-center text-green-600">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span className="text-sm">+15.3% from last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Subscription Revenue</p>
              <h3 className="text-2xl font-bold text-gray-900">R 456,789</h3>
            </div>
            <CreditCard className="h-8 w-8 text-purple-600" />
          </div>
          <div className="mt-4 flex items-center text-green-600">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span className="text-sm">+12.1% from last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Commission Revenue</p>
              <h3 className="text-2xl font-bold text-gray-900">R 345,678</h3>
            </div>
            <Wallet className="h-8 w-8 text-green-600" />
          </div>
          <div className="mt-4 flex items-center text-green-600">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span className="text-sm">+18.7% from last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Featured Listings</p>
              <h3 className="text-2xl font-bold text-gray-900">R 123,456</h3>
            </div>
            <ArrowUpRight className="h-8 w-8 text-orange-600" />
          </div>
          <div className="mt-4 flex items-center text-green-600">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span className="text-sm">+9.4% from last month</span>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h2>
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center justify-between py-3 border-b border-gray-100">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center
                              ${i % 3 === 0 ? 'bg-blue-100' :
                                i % 3 === 1 ? 'bg-purple-100' : 'bg-green-100'}`}>
                  {i % 3 === 0 ? (
                    <CreditCard className={`h-5 w-5 text-blue-600`} />
                  ) : i % 3 === 1 ? (
                    <Wallet className={`h-5 w-5 text-purple-600`} />
                  ) : (
                    <ArrowUpRight className={`h-5 w-5 text-green-600`} />
                  )}
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">
                    {i % 3 === 0 ? 'Premium Subscription' :
                     i % 3 === 1 ? 'Job Commission' : 'Featured Listing'}
                  </p>
                  <p className="text-sm text-gray-500">2 minutes ago</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">
                  R {((i + 1) * 1000).toLocaleString()}
                </p>
                <p className="text-sm text-gray-500">
                  {i % 2 === 0 ? 'Completed' : 'Pending'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}