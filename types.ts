import type { LucideIcon } from 'lucide-react';

export interface ProjectInitiation {
  id: string;
  name: string;
  initiatingBU: string;
  type: string;
  status: string;
}

export interface InitiationApproval {
  id: string;
  name: string;
  projectName: string;
  initiatingBU: string;
  type: string;
  status: string;
  ipEvaluation: string;
  buName: string;
  region: string;
  country: string;
  dosageForm: string;
  packStyle: string;
  strength: string;
  sunit: string;
  ipdRemarks: string;
  regulatoryRemarks: string;
}

export interface CogsEstimation {
  id: string;
  projectName: string;
  apiSource: string;
  projectStatus: string;
  apiPricePerKg: string;
  freightPercent: string;
  testingPercent: string;
  saltAssayFactor: string;
  dosageInfo: {
    dosageForm: string;
    packStyle: string;
    strength: string;
    strengthUnit: string;
    ptd: string;
    currency: string;
    batchSize: string;
    yieldPercent: string;
    bopPacks: string;
    comv10: string;
  };
}

export interface FinalPLEvaluation {
  id: string;
  projectName: string;
  initiationDate: string;
  launchDate: string;
  currency: string;
  assumptions: {
    discountRate: string;
    taxRate: string;
    opexPercent: string;
    inventory: string;
    receivables: string;
    payables: string;
  };
  calculations: {
    gestationYears: string;
    gestationMonths: string;
    simplePaybackYears: string;
    simplePaybackMonths: string;
    discountedPaybackYears: string;
    discountedPaybackMonths: string;
    npv: number;
  };
}
// ... other types for ipd, initiationApproval, etc.

export interface NavItem {
    path: string;
    name: string;
    icon: LucideIcon;
    subItems?: NavItem[];
}
