const navContainer = document.querySelector('.nav-container');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navContainer.style.background = '#1a1a1a'; // Change background color on scroll
  } else {
    navContainer.style.background = 'linear-gradient(90deg, rgba(50,120,250,1) 0%, rgba(86,198,255,1) 100%)'; // Default background
  }
});

const navItems = document.querySelectorAll('.nav-menu li a');

navItems.forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.background = '#ff9900'; // Change background color on hover
  });

  item.addEventListener('mouseout', () => {
    item.style.background = 'transparent'; // Reset background color on mouseout
  });
});
