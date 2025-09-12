// FIX: Add missing import for React to resolve namespace errors.
import React from 'react';

export interface NavItem {
  label: string;
  path: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children?: NavItem[];
}

export interface Project {
  id: string;
  type: string;
  bu: string;
  source: string;
  name: string;
  dosageForm: string;
  strength: string;
  strengthUnit: string;
  packStyle: string;
  status: 'Approved' | 'Rejected' | 'Ongoing' | 'In IPD' | 'In PI' | 'COG Approved';
  statusColor: 'green' | 'red' | 'yellow' | 'blue' | 'cyan' | 'orange';
  initiationDate: string;
}

export interface TimelineTask {
  id: string;
  name: string;
  start: string; // YYYY-MM-DD
  end: string; // YYYY-MM-DD
  color: string; // e.g., 'bg-blue-500'
}

export interface TimelineProject {
  id: string;
  name: string;
  tasks: TimelineTask[];
}