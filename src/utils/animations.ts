// Simple animation utility to add scroll reveal animations

export const animateOnScroll = () => {
  const elements = document.querySelectorAll('.scroll-reveal');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  elements.forEach((element) => {
    observer.observe(element);
  });
};

export const addScrollAnimations = () => {
  document.addEventListener('DOMContentLoaded', animateOnScroll);
};