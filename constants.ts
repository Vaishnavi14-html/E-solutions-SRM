
import { NavItem, Project, TimelineProject } from './types';
import { 
  DashboardIcon, ProjectListingIcon, InitiationIcon, IPDIcon, ApprovalIcon, CogsIcon, CommercialsIcon, 
  FormulationIcon, LicensedProjectIcon, ScheduleIcon, RevenueIcon, PLEvaluationIcon, FinalApprovalIcon, 
  ReportsIcon, AdminIcon, TimelineIcon, TableIcon, MasterManagementIcon, CurrencyIcon, DateFormatIcon 
} from './components/icons/Icons';


export const NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard', path: '/dashboard', icon: DashboardIcon },
  { label: 'Project Listing', path: '/project-listing', icon: ProjectListingIcon },
  { label: 'Initiation', path: '/initiation', icon: InitiationIcon },
  { label: 'IPD', path: '/ipd', icon: IPDIcon },
  { label: 'Initiation Approval', path: '/initiation-approval', icon: ApprovalIcon },
  { label: 'Cogs Estimation', path: '/cogs-estimation', icon: CogsIcon },
  { label: 'Commercials', path: '/commercials', icon: CommercialsIcon },
  {
    label: 'Formulation Budget Form',
    path: '/formulation-budget',
    icon: FormulationIcon,
  },
  { label: 'In Licensed Project', path: '/in-licensed-project', icon: LicensedProjectIcon },
  { label: 'Final Schedule', path: '/final-schedule', icon: ScheduleIcon },
  { label: 'Revenue GC Roll Up', path: '/revenue-gc-rollup', icon: RevenueIcon },
  { label: 'Final PL & Evaluation', path: '/final-pl-evaluation', icon: PLEvaluationIcon },
  { label: 'Final Approval', path: '/final-approval', icon: FinalApprovalIcon },
  {
    label: 'Reports',
    path: '/reports',
    icon: ReportsIcon,
    children: [
      { label: 'Project Timeline', path: '/reports/project-timeline', icon: TimelineIcon },
      { label: 'In-Licensed Projects Table', path: '/reports/in-licensed-projects-table', icon: TableIcon },
    ],
  },
  {
    label: 'Admin',
    path: '/admin',
    icon: AdminIcon,
    children: [
      { label: 'Master Management', path: '/admin/master-management', icon: MasterManagementIcon },
      { label: 'Group Currency', path: '/admin/group-currency', icon: CurrencyIcon },
      { label: 'Date Format', path: '/admin/date-format', icon: DateFormatIcon },
    ],
  },
];

export const MOCK_PROJECTS: Project[] = [
    { id: 'IL25077', type: 'In Licensing', bu: 'BU3 - UK', source: 'Maple', name: 'Guanfacine tablets', dosageForm: 'Tablet', strength: '1/2/3/4', strengthUnit: 'mg', packStyle: 'ALU-ALU Blister', status: 'Approved', statusColor: 'green', initiationDate: '2023-03-03' },
    { id: 'ID25054', type: 'In-House Development', bu: 'BU2 - S.Zhaveri', source: 'In-House', name: 'Haloperidol Tablets', dosageForm: 'Tablet', strength: '1/2', strengthUnit: 'mg', packStyle: 'ALU-PVC Blister', status: 'In IPD', statusColor: 'blue', initiationDate: '2023-04-12' },
    { id: 'ST25108', type: 'Site Transfer', bu: 'BU4 Others', source: 'Maple', name: 'Ascorbic Acid Tablets', dosageForm: 'Tablet', strength: '50/100/200/500', strengthUnit: 'mg', packStyle: 'Bottle', status: 'In PI', statusColor: 'cyan', initiationDate: '2023-05-20' },
    { id: 'ST25064', type: 'Site Transfer', bu: 'BU2 - S.Zhaveri', source: 'In-House', name: 'Tolterodine prolonged-release', dosageForm: 'Capsule', strength: '2/4', strengthUnit: 'mg', packStyle: 'ALU-PVC/PVDC Blister', status: 'Rejected', statusColor: 'red', initiationDate: '2023-06-01' },
    { id: 'ST25014', type: 'Site Transfer', bu: 'BU2 - S.Zhaveri', source: 'In-House', name: 'Nifedipine Tablets', dosageForm: 'Tablet', strength: '20', strengthUnit: 'mg', packStyle: 'ALU-PVC Blister', status: 'Ongoing', statusColor: 'yellow', initiationDate: '2023-07-15' },
    { id: 'ST25060', type: 'Site Transfer', bu: 'BU2 - S.Zhaveri', source: 'In-House', name: 'Chlordiazepoxide Capsules', dosageForm: 'Capsule', strength: '5/10', strengthUnit: 'mg', packStyle: 'ALU-PVC/PVDC Blister', status: 'Approved', statusColor: 'green', initiationDate: '2023-08-01' },
    { id: 'ID25001', type: 'In-House Development', bu: 'BU2 - S.Zhaveri', source: 'In-House', name: 'Nitrofurantoin Capsules', dosageForm: 'Capsule', strength: '50/100', strengthUnit: 'mg', packStyle: 'ALU-PVC Blister', status: 'COG Approved', statusColor: 'orange', initiationDate: '2023-09-10' },
];

export const MOCK_TIMELINE_DATA: TimelineProject[] = [
  {
    id: 'P1',
    name: 'Guanfacine tablets',
    tasks: [
      { id: 'T1-1', name: 'Project Initiation', start: '2024-08-08', end: '2024-08-09', color: 'bg-green-500' },
      { id: 'T1-2', name: 'Filing Fee - UK', start: '2024-08-07', end: '2024-08-07', color: 'bg-yellow-500' },
    ],
  },
  {
    id: 'P2',
    name: 'Metoprolol tablets',
    tasks: [
        { id: 'T2-1', name: 'Project Initiation', start: '2024-08-06', end: '2024-08-06', color: 'bg-green-500' },
        { id: 'T2-2', name: 'Filing Fee - UK', start: '2024-08-07', end: '2024-08-08', color: 'bg-blue-500' },
        { id: 'T2-3', name: 'Filing Fee - UK', start: '2024-08-08', end: '2024-08-09', color: 'bg-cyan-500' },
        { id: 'T2-4', name: 'Signing of Agreement', start: '2024-08-07', end: '2024-08-07', color: 'bg-pink-500' },
        { id: 'T2-5', name: 'MAT filing', start: '2024-08-06', end: '2024-08-10', color: 'bg-purple-500' },
    ],
  },
    {
    id: 'P3',
    name: 'Terbinatine Cream',
    tasks: [
      { id: 'T3-1', name: 'Project Initiation', start: '2024-08-08', end: '2024-08-12', color: 'bg-orange-500' },
    ],
  },
];
