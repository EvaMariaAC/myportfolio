// Smooth scrolling for navigation links
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Simple button interaction (console log for demo)
  document.querySelector('.btn-primary').addEventListener('click', () => {
    console.log('View Portfolio button clicked!');
  });
  
  document.querySelector('.btn-secondary').addEventListener('click', () => {
    console.log('Contact Me button clicked!');
  });
  