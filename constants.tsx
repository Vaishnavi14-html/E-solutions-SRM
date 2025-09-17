
import { 
    LayoutDashboard, FileText, Beaker, FileCheck2, Calculator, FlaskConical, DollarSign, 
    FileClock, FolderGit2, BarChart3, Users, Settings, Briefcase, CalendarClock, Table, KeyRound, Workflow, UserCheck
} from 'lucide-react';
import type { NavItem } from './types';

export const SIDEBAR_NAV_ITEMS: NavItem[] = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Project Listing', path: '/project-listing', icon: FileText },
    { name: 'Initiation', path: '/initiation', icon: Beaker },
    { name: 'IPD', path: '/ipd', icon: Workflow },
    { name: 'Initiation Approval', path: '/initiation-approval', icon: UserCheck },
    { name: 'Cogs Estimation', path: '/cogs-estimation', icon: Calculator },
    { name: 'Commercials', path: '/commercials', icon: DollarSign },
    { 
        name: 'Formulation Budget Form', 
        path: '/formulation-budget', 
        icon: FlaskConical,
        subItems: [
            { name: 'Formulation Development', path: '/formulation-budget/development', icon: Beaker },
            { name: 'API', path: '/formulation-budget/api', icon: Beaker },
            { name: 'Excipients & PM', path: '/formulation-budget/excipients', icon: Beaker },
            { name: 'Analytical', path: '/formulation-budget/analytical', icon: Beaker },
            { name: 'BE & RLD Cost', path: '/formulation-budget/be-rld-cost', icon: Beaker },
            { name: 'Tooling & Plant Cost', path: '/formulation-budget/tooling-plant-cost', icon: Beaker },
            { name: 'Manpower Cost', path: '/formulation-budget/manpower-cost', icon: Beaker },
            { name: 'Filing Cost', path: '/formulation-budget/filing-cost', icon: Beaker },
        ]
    },
    { name: 'In Licensed Project', path: '/in-licensed-project', icon: Briefcase },
    { name: 'Final Schedule', path: '/final-schedule', icon: CalendarClock },
    { name: 'Revenue GC Roll Up', path: '/revenue-gc-roll-up', icon: DollarSign },
    { name: 'Final PL & Evaluation', path: '/final-pl-evaluation', icon: FileClock },
    { name: 'Final Approval', path: '/final-approval', icon: FileCheck2 },
    { 
        name: 'Reports', 
        path: '/reports', 
        icon: BarChart3,
        subItems: [
            { name: 'Project Timeline', path: '/reports/project-timeline', icon: CalendarClock },
            { name: 'In-Licensed Projects Table', path: '/reports/in-licensed-projects-table', icon: Table },
        ]
    },
    { 
        name: 'Admin', 
        path: '/admin', 
        icon: Settings,
        subItems: [
            { name: 'Master Management', path: '/admin/master-management', icon: Users },
            { name: 'Group Currency', path: '/admin/group-currency', icon: DollarSign },
            { name: 'Change Password', path: '/admin/change-password', icon: KeyRound },
            { name: 'Date Format', path: '/admin/date-format', icon: KeyRound },
        ]
    },
];
