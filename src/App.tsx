import React from 'react';
import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import JobPostingWizard from './components/JobPosting/JobPostingWizard';
import JobListings from './components/JobListings';
import ContractorList from './components/ContractorList';
import ContractorProfileWizard from './components/ContractorProfile/ContractorProfileWizard';

type Page = 'home' | 'jobs' | 'contractors' | 'post-job' | 'pricing' | 'create-profile';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'jobs':
        return <JobListings />;
      case 'contractors':
        return <ContractorList />;
      case 'post-job':
        return <JobPostingWizard />;
      case 'create-profile':
        return <ContractorProfileWizard />;
      case 'pricing':
        return <div>Pricing Page</div>; // TODO: Implement pricing page
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      {renderPage()}
    </div>
  );
}

export default App;