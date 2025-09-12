
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import ProjectListingPage from './pages/ProjectListingPage';
import ProjectTimelinePage from './pages/ProjectTimelinePage';
import ProjectInitiationFormPage from './pages/ProjectInitiationFormPage';
import GenericPage from './pages/GenericPage';
import AdminPage from './pages/AdminPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // In a real app, this would be a proper context or state management solution
  const handleLogin = () => {
    setIsAuthenticated(true);
  };
  
  const handleLogout = () => {
    setIsAuthenticated(false);
  }

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<MainLayout onLogout={handleLogout} />}>
        <Route index element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="project-listing" element={<ProjectListingPage />} />
        <Route path="initiation" element={<GenericPage title="Project Initiation Details" />} />
        <Route path="initiation-form" element={<ProjectInitiationFormPage />} />
        <Route path="ipd" element={<GenericPage title="Project IPD Details" />} />
        <Route path="initiation-approval" element={<GenericPage title="Project Initiation Approval Details" />} />
        <Route path="cogs-estimation" element={<GenericPage title="Cogs Estimation Details" />} />
        <Route path="commercials" element={<GenericPage title="Commercials" />} />
        <Route path="formulation-budget" element={<GenericPage title="Formulation Budget Form" />} />
        <Route path="in-licensed-project" element={<GenericPage title="In Licensed Project Details" />} />
        <Route path="final-schedule" element={<GenericPage title="Final Schedule Details" />} />
        <Route path="revenue-gc-rollup" element={<GenericPage title="Revenue GC Roll Up" />} />
        <Route path="final-pl-evaluation" element={<GenericPage title="Final PL & Evaluation Details" />} />
        <Route path="final-approval" element={<GenericPage title="Final Approval Details" />} />
        <Route path="reports/project-timeline" element={<ProjectTimelinePage />} />
        <Route path="reports/in-licensed-projects-table" element={<GenericPage title="In-Licensed Projects Table" />} />
        <Route path="admin/master-management" element={<AdminPage />} />
        <Route path="admin/group-currency" element={<GenericPage title="Group Currency" />} />
        <Route path="admin/date-format" element={<GenericPage title="Date Format" />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
