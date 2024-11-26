import React, { useState } from 'react';
import { Menu, Bell, User, X, Building2, Briefcase, PlusCircle, CreditCard, Search, UserPlus } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'jobs' | 'contractors' | 'post-job' | 'pricing' | 'create-profile') => void;
  currentPage: string;
}

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const navItems = [
    { 
      label: 'Find Jobs',
      page: 'jobs',
      icon: Search,
      description: 'Browse available construction projects'
    },
    { 
      label: 'Contractors',
      page: 'contractors',
      icon: Building2,
      description: 'Find qualified contractors'
    },
    { 
      label: 'Post a Job',
      page: 'post-job',
      icon: PlusCircle,
      description: 'Create a new job listing'
    },
    { 
      label: 'Pricing',
      page: 'pricing',
      icon: CreditCard,
      description: 'View our pricing plans'
    }
  ] as const;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-600 lg:hidden hover:bg-gray-100"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            <div 
              className="ml-4 flex items-center cursor-pointer" 
              onClick={() => {
                onNavigate('home');
                setIsMobileMenuOpen(false);
              }}
            >
              <Briefcase className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-2xl font-bold text-blue-600">BuildConnect SA</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navItems.map(({ label, page, icon: Icon }) => (
              <button
                key={page}
                onClick={() => onNavigate(page)}
                className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                  currentPage === page
                    ? 'text-blue-600 bg-blue-50 font-semibold'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-5 w-5 mr-2" />
                {label}
              </button>
            ))}
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 relative">
              <Bell className="h-6 w-6 text-gray-600" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500" />
            </button>
            <div className="relative">
              <button 
                className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100"
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              >
                <User className="h-6 w-6 text-gray-600" />
                <span className="hidden lg:block text-sm text-gray-700">Account</span>
              </button>

              {/* Profile Dropdown */}
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <button
                    onClick={() => {
                      onNavigate('create-profile');
                      setIsProfileMenuOpen(false);
                    }}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <UserPlus className="h-4 w-4 mr-2" />
                    Create Contractor Profile
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map(({ label, page, icon: Icon, description }) => (
              <button
                key={page}
                onClick={() => {
                  onNavigate(page);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center px-3 py-2 rounded-md transition-colors ${
                  currentPage === page
                    ? 'text-blue-600 bg-blue-50 font-semibold'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-5 w-5 mr-3" />
                <div className="text-left">
                  <div className="font-medium">{label}</div>
                  <div className="text-sm text-gray-500">{description}</div>
                </div>
              </button>
            ))}
            <button
              onClick={() => {
                onNavigate('create-profile');
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center px-3 py-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50"
            >
              <UserPlus className="h-5 w-5 mr-3" />
              <div className="text-left">
                <div className="font-medium">Create Contractor Profile</div>
                <div className="text-sm text-gray-500">Set up your professional profile</div>
              </div>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}