// Navbar Scroll Effect
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.sedjasa-navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    navbar.style.backdropFilter = 'blur(10px)';
  } else {
    navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
    navbar.style.background = 'white';
    navbar.style.backdropFilter = 'none';
  }
});

// Active Link Highlighting
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function() {
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});

// Mobile Menu Close on Click
document.querySelectorAll('.navbar-collapse .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const collapse = bootstrap.Collapse.getInstance(document.getElementById('navbarNav'));
    if (window.innerWidth < 992) {
      collapse.hide();
    }
  });
});

// Bottom Bar Active Item
const bottomBarItems = document.querySelectorAll('.bottom-bar-item');
bottomBarItems.forEach(item => {
    item.addEventListener('click', function () {
        bottomBarItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});

// kategori JS
// Animasi saat scroll
document.addEventListener('DOMContentLoaded', function() {
    // Animasi category cards saat muncul di viewport
    const categoryCards = document.querySelectorAll('.category-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
    
    categoryCards.forEach(card => {
      card.style.opacity = 0;
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(card);
    });
    
    // Filter kategori jika diperlukan
    // Contoh implementasi filter sederhana
    const filterButtons = document.querySelectorAll('.category-filter-btn');
    if (filterButtons.length > 0) {
      filterButtons.forEach(button => {
        button.addEventListener('click', function() {
          const filterValue = this.getAttribute('data-filter');
          document.querySelectorAll('.category-group').forEach(group => {
            if (filterValue === 'all' || group.id === filterValue) {
              group.style.display = 'block';
            } else {
              group.style.display = 'none';
            }
          });
          
          // Update active button
          filterButtons.forEach(btn => btn.classList.remove('active'));
          this.classList.add('active');
        });
      });
    }
  });