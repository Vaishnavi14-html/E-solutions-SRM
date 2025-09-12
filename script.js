
document.addEventListener("DOMContentLoaded", function () {
  const sidebarContainer = document.getElementById("sidebar-container");
  const headerContainer = document.getElementById("header-container");
  const currentPage = window.location.pathname.split("/").pop();

  // --- Data and Templates ---

  const navItems = [
    { label: 'Dashboard', path: 'dashboard.html', icon: 'speedometer2' },
    { label: 'Project Listing', path: 'project-listing.html', icon: 'list-ul' },
    { label: 'Initiation', path: 'generic-page.html', icon: 'journal-plus' },
    { label: 'IPD', path: 'generic-page.html', icon: 'sliders' },
    { label: 'Initiation Approval', path: 'generic-page.html', icon: 'patch-check' },
    { label: 'Cogs Estimation', path: 'generic-page.html', icon: 'gear' },
    { label: 'Commercials', path: 'generic-page.html', icon: 'building' },
    { label: 'Formulation Budget Form', path: 'initiation-form.html', icon: 'clipboard-data' },
    { label: 'In Licensed Project', path: 'generic-page.html', icon: 'briefcase' },
    { label: 'Final Schedule', path: 'generic-page.html', icon: 'calendar-week' },
    { label: 'Revenue GC Roll Up', path: 'generic-page.html', icon: 'graph-up-arrow' },
    { label: 'Final PL & Evaluation', path: 'generic-page.html', icon: 'calculator' },
    { label: 'Final Approval', path: 'generic-page.html', icon: 'award' },
    {
      label: 'Reports',
      icon: 'pie-chart',
      children: [
        { label: 'Project Timeline', path: 'project-timeline.html', icon: 'bar-chart-steps' },
        { label: 'In-Licensed Projects Table', path: 'generic-page.html', icon: 'table' },
      ],
    },
    {
      label: 'Admin',
      icon: 'shield-lock',
      children: [
        { label: 'Master Management', path: 'master-management.html', icon: 'database-gear' },
        { label: 'Group Currency', path: 'generic-page.html', icon: 'currency-dollar' },
        { label: 'Date Format', path: 'generic-page.html', icon: 'calendar3' },
      ],
    },
  ];

  // Function to get Bootstrap Icon SVG
  const getIcon = (iconName) => `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-${iconName} nav-icon" viewBox="0 0 16 16">
      ${bootstrapIcons[iconName]}
    </svg>`;

  // --- Component Injection ---
  
  if (sidebarContainer) {
    sidebarContainer.innerHTML = `
      <aside class="sidebar vh-100">
        <div class="sidebar-header">
          <svg class="es-logo-icon text-primary me-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.08V7.92c0-.41.47-.65.8-.4l5.6 3.08c.33.18.33.64 0 .82l-5.6 3.08c-.33.18-.8.06-.8-.34z"/></svg>
          <a class="sidebar-brand" href="dashboard.html">E-Solutions</a>
        </div>
        <nav class="sidebar-nav">
          <ul class="nav flex-column">
            ${navItems.map(item => `
              <li class="nav-item">
                ${item.children ? `
                  <a class="nav-link" href="#" data-bs-toggle="collapse" data-bs-target="#${item.label.replace(' ', '-')}" aria-expanded="false">
                    ${getIcon(item.icon)} <span class="nav-label">${item.label}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down submenu-toggle" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/></svg>
                  </a>
                  <div class="collapse submenu" id="${item.label.replace(' ', '-')}">
                    <ul class="nav flex-column">
                      ${item.children.map(child => `
                        <li class="nav-item">
                          <a class="nav-link" href="${child.path}">${child.label}</a>
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                ` : `
                  <a class="nav-link" href="${item.path}">
                    ${getIcon(item.icon)} <span class="nav-label">${item.label}</span>
                  </a>
                `}
              </li>
            `).join('')}
          </ul>
        </nav>
        <div class="sidebar-footer">
          <button class="btn btn-outline-secondary w-100" id="sidebar-toggle">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"/></svg>
          </button>
        </div>
      </aside>
    `;
  }

  if (headerContainer) {
    headerContainer.innerHTML = `
      <header class="header">
        <h1 class="page-title fs-5 fw-semibold" id="page-title">Dashboard</h1>
        <div class="d-flex align-items-center">
            <div class="d-none d-md-flex align-items-center border-end pe-3 me-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe me-2 text-muted" viewBox="0 0 16 16"><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4.06a6.7 6.7 0 0 1-1.032 3.07C4.098 8.573 4.148 9.5 4.5 10.4a8.3 8.3 0 0 0 .858 2.088a10 10 0 0 0 2.293 2.531c.798.596 1.837.936 2.951.936 1.114 0 2.153-.34 2.951-.936a10 10 0 0 0 2.293-2.531 8.3 8.3 0 0 0 .858-2.088c.352-.9.402-1.827.106-2.872a6.7 6.7 0 0 1-1.032-3.07 7.97 7.97 0 0 0-.46-1.137C10.835 1.897 10.17 1.282 9.5 1.077z"/></svg>
                <span class="small">Currency - GBP</span>
            </div>
            <div class="dropdown">
                <button class="btn btn-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://i.pravatar.cc/40?u=John Doe" alt="User" width="32" height="32" class="rounded-circle">
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><a class="dropdown-item" href="#">Profile</a></li>
                    <li><a class="dropdown-item" href="#">Settings</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item text-danger" href="index.html">Logout</a></li>
                </ul>
            </div>
        </div>
      </header>
    `;
  }

  // --- Interactivity ---

  // Sidebar Toggle
  const sidebarToggle = document.getElementById("sidebar-toggle");
  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", () => {
      document.body.classList.toggle("sidebar-collapsed");
    });
  }

  // Active Nav Link and Page Title
  const allNavLinks = document.querySelectorAll(".sidebar-nav .nav-link");
  let activeLabel = 'Dashboard';

  allNavLinks.forEach(link => {
    const linkPath = link.getAttribute('href');

    // Handle direct link matches
    if (linkPath === currentPage) {
      link.classList.add("active");
      activeLabel = link.textContent.trim();
      
      // Open parent submenu if it exists
      const parentSubmenu = link.closest('.submenu');
      if (parentSubmenu) {
        parentSubmenu.classList.add('show');
        const parentToggle = document.querySelector(`[data-bs-target="#${parentSubmenu.id}"]`);
        if(parentToggle) parentToggle.setAttribute('aria-expanded', 'true');
      }
    }
  });
  
  // Set page title
  const pageTitleEl = document.getElementById('page-title');
  if (pageTitleEl) {
    // A small hack for generic pages to get title from nav
    if (currentPage === 'generic-page.html') {
        const foundLink = Array.from(allNavLinks).find(l => l.classList.contains('active'));
        if(foundLink) {
             activeLabel = foundLink.textContent.trim();
        }
    }
    pageTitleEl.textContent = activeLabel;
  }
  
  // Update title for generic page template
  const genericPageTitle = document.getElementById('generic-page-title');
  if(genericPageTitle) {
      genericPageTitle.textContent = activeLabel + " Details";
  }


// Bootstrap Icons paths (add more as needed)
const bootstrapIcons = {
  speedometer2: '<path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4M3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.5.5 0 0 1 0 .708l-.914.915a.5.5 0 1 1-.708-.708l.915-.914a.5.5 0 0 1 .707 0M12 4a.5.5 0 0 1 .5.5v1.5a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 12 4"/><path d="M8 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0 1A7 7 0 1 1 8 1a7 7 0 0 1 0 14"/>',
  'list-ul': '<path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-2-4A.5.5 0 0 1 3.5 7h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-2-4A.5.5 0 0 1 3.5 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5"/>',
  'journal-plus': '<path fill-rule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5"/><path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>',
  sliders: '<path d="M8 1a1 1 0 0 1 1 1v11a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1M4 1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1m8 0a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1"/>',
  'patch-check': '<path fill-rule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0"/><path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.01a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0 2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>',
  gear: '<path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/><path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.115 2.692l.319.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.319c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>',
  building: '<path d="M8 18a.5.5 0 0 1-.5-.5V15h1v2.5a.5.5 0 0 1-.5.5"/><path d="M11 18a.5.5 0 0 1-.5-.5V12h1v5.5a.5.5 0 0 1-.5.5"/><path d="M5 18a.5.5 0 0 1-.5-.5V12h1v5.5a.5.5 0 0 1-.5.5"/><path d="M1 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5H1.5a.5.5 0 0 1-.5-.5zM2 3v10h12V3z"/>',
  'clipboard-data': '<path d="M4 11a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm6-4a1 1 0 1 1 2 0v5a1 1 0 1 1-2 0zM7 9a1 1 0 0 1 2 0v3a1 1 0 1 1-2 0z"/><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>',
  briefcase: '<path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zM5.5 3V2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5V3zM1 4.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5z"/>',
  'calendar-week': '<path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"/><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>',
  'graph-up-arrow': '<path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5M6 6.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0v-6a.5.5 0 0 1 .5-.5m8 1.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5m-12-1a.5.5 0 0 1 .5-.5H3a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 2 7m4-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1-.5-.5m1 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1-.5-.5"/>',
  calculator: '<path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/><path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm2.5.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zm-5-1a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"/>',
  award: '<path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68z"/><path d="M8 11.794l-1.157-.599-1.591-.24-1.125-2.246-1.512-1.508 1.512-1.508 1.125-2.246 1.591-.24L8 4.206l1.157.599 1.591.24 1.125 2.246 1.512 1.508-1.512 1.508-1.125 2.246-1.591.24z"/><path d="M8 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>',
  'pie-chart': '<path d="M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793zM8.5 1.018V7.5h6.482A7 7 0 0 0 8.5 1.018M14.982 8.5H8.207l-4.79 4.79A7 7 0 0 0 14.982 8.5M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"/>',
  'shield-lock': '<path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.223c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.61.61 0 0 0 .1-.025c.076-.023.174-.06.294-.118.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.223c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.95-1.73-2.132-3.16-3.468-4.04-1.24-.78-2.682-1.25-4.148-1.337C6.06.418 5.634.646 5.338 1.59"/><path d="M8 5a1 1 0 0 1 1 1v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a1 1 0 0 1 1-1"/>',
  'bar-chart-steps': '<path d="M.5 0a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 .5 0M2 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5zM2 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5z"/>',
  table: '<path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 2h-4v3h4zm0 4h-4v3h4zm0 4h-4v3h3a1 1 0 0 0 1-1zm-5 3v-3H6v3zm-5-4h4V8H1v3zm4-4H1v3h4z"/>',
  'database-gear': '<path d="M8 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m4.242-.242a.5.5 0 0 1 0 .708l-.647.646a.5.5 0 1 1-.708-.707l.647-.647a.5.5 0 0 1 .708 0m-3.535 0a.5.5 0 0 1 .708 0l.647.646a.5.5 0 1 1-.708.708l-.647-.646a.5.5 0 0 1 0-.708"/><path d="M8 1c-1.573 0-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4s.875 1.755 1.904 2.223C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777C13.125 5.755 14 5.007 14 4s-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1m0 9c-1.573 0-3.022.289-4.096.777C2.875 11.245 2 11.993 2 13s.875 1.755 1.904 2.223C4.978 15.711 6.427 16 8 16s3.022-.289 4.096-.777C13.125 14.755 14 14.007 14 13s-.875-1.755-1.904-2.223C11.022 10.289 9.573 10 8 10M3 4c0-1.007.875-1.755 1.904-2.223C5.978 1.289 7.427 1 9 1s3.022.289 4.096.777C14.125 2.245 15 2.993 15 4v9c0 1.007-.875 1.755-1.904 2.223C12.022 15.711 10.573 16 9 16s-3.022-.289-4.096-.777C3.875 14.755 3 14.007 3 13z"/>',
  'currency-dollar': '<path d="M4 10.781c.524 1.637 2.542 2.87 4.518 2.87s3.994-1.233 4.518-2.87C13.196 11.41 14 12.607 14 14c0 1.258-.804 2.45-2.012 2.87C11.396 16.94 9.775 17 8 17s-3.396-.06-4.988-.13C1.804 16.45 1 15.258 1 14c0-1.393.804-2.59 2.012-3.219m4.148-9.456a.5.5 0 0 1 .547.118l1.644 1.848a.5.5 0 0 1-.74 1.152L8.5 3.321V9a.5.5 0 0 1-1 0V3.321l-.411.462a.5.5 0 0 1-.74-1.152l1.644-1.848a.5.5 0 0 1 .203-.118"/>',
  calendar3: '<path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5"/>',
};


});
