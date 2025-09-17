import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';

import Header from './components/layout/Header';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import GenericProjectTablePage from './pages/GenericProjectTablePage';
import ProjectTimelinePage from './pages/ProjectTimelinePage';
import ProjectInitiationFormPage from './pages/ProjectInitiationFormPage';
import InitiationApprovalDetailPage from './pages/InitiationApprovalDetailPage';
import CogsEstimationFormPage from './pages/CogsEstimationFormPage';
import FinalPLEvaluationFormPage from './pages/FinalPLEvaluationFormPage';
import AdminSettingsPage from './pages/AdminSettingsPage';
import ProfilePage from './pages/ProfilePage';
import ProjectDetailPage from './pages/ProjectDetailPage'; // Import the new detail page
import Sidebar from './components/layout/Sidebar';
import BudgetFormPage from './pages/BudgetFormPage';
import CommercialPage from './pages/CommercialPage';

const MainLayout: React.FC = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

    return (
        <div className="flex h-screen bg-slate-100 font-sans">
            <Sidebar isOpen={isSidebarOpen} />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Header onToggleSidebar={toggleSidebar} />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-100 p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

const NotImplementedPage: React.FC<{title: string}> = ({title}) => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        <p className="mt-4">This page is not yet implemented.</p>
    </div>
);


const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Navigate to="/login" replace />} />
                    <Route path="dashboard" element={<DashboardPage />} />
                    <Route path="project-listing" element={<GenericProjectTablePage title="Project Listing" dataType="initiation" />} />
                    <Route path="initiation" element={<GenericProjectTablePage title="Project Initiation" dataType="initiation" showCreateButton />} />
                    <Route path="initiation/new" element={<ProjectInitiationFormPage />} />
                    <Route path="ipd" element={<GenericProjectTablePage title="IPD" dataType="ipd" />} />
                    <Route path="initiation-approval" element={<GenericProjectTablePage title="Initiation Approval" dataType="initiationApproval" />} />
                    <Route path="initiation-approval/:projectId" element={<InitiationApprovalDetailPage />} />
                    <Route path="cogs-estimation" element={<GenericProjectTablePage title="Cogs Estimation" dataType="cogsEstimation" />} />
                    <Route path="cogs-estimation/:projectId/edit" element={<CogsEstimationFormPage />} />
                    
                    <Route path="formulation-budget" element={<Navigate to="/formulation-budget/development" replace />} />
                    <Route path="formulation-budget/development" element={<BudgetFormPage title="Formulation Development Budget" />} />
                    <Route path="formulation-budget/api" element={<BudgetFormPage title="API Budget" />} />
                    <Route path="formulation-budget/excipients" element={<BudgetFormPage title="Excipients & PM Budget" />} />
                    <Route path="formulation-budget/analytical" element={<BudgetFormPage title="Analytical Budget" />} />
                    <Route path="formulation-budget/be-rld-cost" element={<BudgetFormPage title="BE & RLD Cost Budget" />} />
                    <Route path="formulation-budget/tooling-plant-cost" element={<BudgetFormPage title="Tooling & Plant Cost Budget" />} />
                    <Route path="formulation-budget/manpower-cost" element={<BudgetFormPage title="Manpower Cost Budget" />} />
                    <Route path="formulation-budget/filing-cost" element={<BudgetFormPage title="Filing Cost Budget" />} />
                    
                    <Route path="in-licensed-project" element={<GenericProjectTablePage title="In Licensed Project" dataType="inLicensed" />} />
                    <Route path="final-schedule" element={<GenericProjectTablePage title="Final Schedule" dataType="finalSchedule" />} />
                    <Route path="revenue-gc-roll-up" element={<GenericProjectTablePage title="Revenue GC Roll Up" dataType="revenue" />} />
                    <Route path="final-pl-evaluation" element={<GenericProjectTablePage title="Final PL & Evaluation" dataType="finalPlEvaluation" />} />
                    <Route path="final-pl-evaluation/:projectId/edit" element={<FinalPLEvaluationFormPage />} />
                    <Route path="final-approval" element={<GenericProjectTablePage title="Final Approval" dataType="finalApproval" />} />
                    
                    <Route path="reports" element={<Navigate to="/reports/project-timeline" replace />} />
                    <Route path="reports/project-timeline" element={<ProjectTimelinePage />} />
                    <Route path="reports/in-licensed-projects-table" element={<GenericProjectTablePage title="In-Licensed Projects" dataType="inLicensed" />} />
                    
                    <Route path="admin" element={<Navigate to="/admin/master-management" replace />} />
                    <Route path="admin/master-management" element={<GenericProjectTablePage title="Master Management" dataType="masterManagement" />} />
                    <Route path="admin/group-currency" element={<AdminSettingsPage />} /> 
                    <Route path="admin/change-password" element={<AdminSettingsPage />} />
                    <Route path="admin/date-format" element={<AdminSettingsPage />} /> 

                    <Route path="profile" element={<ProfilePage />} />
                    
                    {/* Add new generic detail page route */}
                    <Route path="project/:dataType/:projectId" element={<ProjectDetailPage />} />
                    <Route path="commercials" element={<CommercialPage />} />

                    {/* A generic catch-all for any other routes */}
                    <Route path="*" element={<NotImplementedPage title="Page Not Found" />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;