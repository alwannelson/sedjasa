document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const menuItems = document.querySelectorAll('.menu-item');
    const navItems = document.querySelectorAll('.nav-item');
    const contentTitle = document.getElementById('content-title');
    const contentBody = document.getElementById('content-body');
    const connectionLine = document.querySelector('.connection-line');
    const connectionDot = document.querySelector('.connection-dot');
    
    // Content templates
    const contentTemplates = {
      akun: {
        title: "Akun",
        body: "ISI KONTEN AKUN"
      },
      pesan: {
        title: "Pesan",
        body: "ISI KONTEN PESAN"
      },
      'tambah-jasa': {
        title: "Tambah Jasa",
        body: "ISI KONTEN TAMBAH JASA"
      },
      laris: {
        title: "SedJasa Laris",
        body: "ISI KONTEN SEDJASA LARIS"
      },
      pengaturan: {
        title: "Pengaturan",
        body: "ISI KONTEN PENGATURAN"
      }
    };
  
    // Update connection indicator position
    function updateConnection(activeElement) {
      if (window.innerWidth > 992) {
        const rect = activeElement.getBoundingClientRect();
        const cardRect = document.querySelector('.dashboard-card').getBoundingClientRect();
        const position = rect.top + (rect.height / 2) - cardRect.top;
        
        document.documentElement.style.setProperty('--connection-height', `${position}px`);
        
        // Force repaint for smooth transition
        connectionLine.style.height = '0';
        connectionDot.style.transform = 'translateY(0)';
        
        setTimeout(() => {
          connectionLine.style.height = `${position}px`;
          connectionDot.style.transform = `translateY(${position}px)`;
        }, 10);
      }
    }
  
    // Set active menu
    function setActiveMenu(menuType) {
      // Update content
      contentTitle.textContent = contentTemplates[menuType].title;
      contentBody.textContent = contentTemplates[menuType].body;
      
      // Update desktop menu
      menuItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-menu') === menuType) {
          item.classList.add('active');
          updateConnection(item);
        }
      });
      
      // Update mobile menu
      navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-menu') === menuType) {
          item.classList.add('active');
        }
      });
    }
  
    // Handle menu click
    function handleMenuClick(e, element) {
      e.preventDefault();
      const menuType = element.getAttribute('data-menu');
      setActiveMenu(menuType);
    }
  
    // Add event listeners
    menuItems.forEach(item => {
      item.addEventListener('click', (e) => handleMenuClick(e, item));
    });
  
    navItems.forEach(item => {
      item.addEventListener('click', (e) => handleMenuClick(e, item));
    });
  
    // Initialize
    setActiveMenu('akun');
    
    // Handle window resize
    window.addEventListener('resize', function() {
      const activeItem = document.querySelector('.menu-item.active');
      if (activeItem) updateConnection(activeItem);
    });
  });