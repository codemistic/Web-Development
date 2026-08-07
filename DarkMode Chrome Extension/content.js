// Function to toggle dark mode
function toggleDarkMode(isDarkMode) {
    if (isDarkMode) {
      document.documentElement.style.filter = 'invert(1) hue-rotate(180deg)';
      document.querySelectorAll('img, picture, video').forEach((element) => {
        element.style.filter = 'invert(1) hue-rotate(180deg)';
      });
    } else {
      document.documentElement.style.filter = '';
      document.querySelectorAll('img, picture, video').forEach((element) => {
        element.style.filter = '';
      });
    }
  }
  
  // Listen for changes in dark mode setting
  chrome.storage.sync.get('darkMode', ({ darkMode }) => {
    toggleDarkMode(darkMode);
  });
  
  // Listen for messages from popup
  chrome.runtime.onMessage.addListener((message) => {
    if (message.command === 'toggle-dark-mode') {
      toggleDarkMode(message.darkMode);
    }
  });
  