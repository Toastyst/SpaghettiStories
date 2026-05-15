// Tab and navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  // Add keyboard navigation for accessibility
  const links = document.querySelectorAll('a');
  
  links.forEach(link => {
    link.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });

  // Live search functionality
  const searchInput = document.querySelector('#search-input');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const query = this.value.toLowerCase();
      const activeTab = document.querySelector('.tab-content.active');
      if (!activeTab) return;
      const posts = activeTab.querySelectorAll('.post-preview');

      posts.forEach(post => {
        const titleEl = post.querySelector('h2 a');
        const title = titleEl ? titleEl.textContent.toLowerCase() : '';
        const excerpt = post.querySelector('.excerpt')?.textContent.toLowerCase() || '';
        const tags = Array.from(post.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase()).join(' ');

        if (title.includes(query) || excerpt.includes(query) || tags.includes(query)) {
          post.style.display = 'block';
        } else {
          post.style.display = 'none';
        }
      });
    });
  }

  // Unified tab switching function
  function switchTab(tabName) {
    // Deactivate all buttons and nav links
    document.querySelectorAll('.tab-button, .nav-link').forEach(el => el.classList.remove('active'));
    
    // Activate matching button and nav link
    const matchingButtons = document.querySelectorAll(`[data-tab="${tabName}"]`);
    matchingButtons.forEach(el => el.classList.add('active'));

    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Show the target tab
    const targetTab = document.getElementById(tabName);
    if (targetTab) {
      targetTab.classList.add('active');
    }

    // Clear search when switching tabs
    if (searchInput) {
      searchInput.value = '';
      searchInput.dispatchEvent(new Event('input'));
    }
  }

  // Tab button clicks
  const tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tab = button.dataset.tab;
      switchTab(tab);
    });
  });

  // New top nav link clicks
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const tab = link.dataset.tab;
      switchTab(tab);
    });
  });

  // Handle hash for direct tab linking (e.g. #random)
  function handleHash() {
    const hash = window.location.hash.substring(1);
    if (hash) {
      // Support simple #random or #random&search=foo
      const [tab, searchPart] = hash.split('&search=');
      if (tab) {
        switchTab(tab);
        
        if (searchPart) {
          const searchInputEl = document.querySelector('#search-input');
          if (searchInputEl) {
            searchInputEl.value = decodeURIComponent(searchPart);
            searchInputEl.dispatchEvent(new Event('input'));
          }
        }
      }
    }
  }

  // Initial setup: make sure first tab is active
  const firstNav = document.querySelector('.nav-link');
  if (firstNav && !document.querySelector('.nav-link.active')) {
    firstNav.classList.add('active');
  }

  handleHash(); // On load
  window.addEventListener('hashchange', handleHash); // On hash change
});