// Navbar Functionality
(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const dropdownToggle = document.getElementById('home-dropdown-toggle');
    const dropdownMenu = document.getElementById('home-dropdown-menu');

    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (navbar) {
        if (currentScroll > 50) {
          navbar.classList.add('navbar-scrolled');
        } else {
          navbar.classList.remove('navbar-scrolled');
        }
      }
      
      lastScroll = currentScroll;
    });

    // Mobile menu toggle
    if (mobileMenuToggle && mobileMenu) {
      mobileMenuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const icon = mobileMenuToggle.querySelector('svg');
        if (icon) {
          icon.classList.toggle('rotate-180');
        }
      });
    }

    // Dropdown toggle for desktop
    if (dropdownToggle && dropdownMenu) {
      let timeout;
      
      dropdownToggle.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
        dropdownMenu.classList.remove('hidden');
        dropdownMenu.classList.add('opacity-100');
      });

      dropdownToggle.addEventListener('mouseleave', () => {
        timeout = setTimeout(() => {
          dropdownMenu.classList.add('hidden');
          dropdownMenu.classList.remove('opacity-100');
        }, 200);
      });

      dropdownMenu.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
      });

      dropdownMenu.addEventListener('mouseleave', () => {
        dropdownMenu.classList.add('hidden');
        dropdownMenu.classList.remove('opacity-100');
      });
    }

    // Mobile dropdown toggle
    const mobileDropdownToggle = document.getElementById('mobile-home-dropdown-toggle');
    const mobileDropdownMenu = document.getElementById('mobile-home-dropdown-menu');
    
    if (mobileDropdownToggle && mobileDropdownMenu) {
      mobileDropdownToggle.addEventListener('click', () => {
        mobileDropdownMenu.classList.toggle('hidden');
      });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (mobileMenu && mobileMenuToggle && 
          !mobileMenu.contains(e.target) && 
          !mobileMenuToggle.contains(e.target)) {
        mobileMenu.classList.add('hidden');
      }
    });
  });
})();

