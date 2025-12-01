document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('dark-mode-toggle');
  
    // Load the current state of dark mode
    chrome.storage.sync.get('darkMode', ({ darkMode }) => {
      toggle.checked = darkMode;
    });
  
    // Handle toggle change
    toggle.addEventListener('change', () => {
      const darkMode = toggle.checked;
      chrome.storage.sync.set({ darkMode });
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          files: ['content.js'],
        });
        chrome.tabs.sendMessage(tabs[0].id, { command: 'toggle-dark-mode', darkMode });
      });
    });
  });
  