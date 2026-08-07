chrome.runtime.onInstalled.addListener(() => {
    if (chrome.storage) {
      chrome.storage.sync.set({ darkMode: false }, () => {
        console.log('Dark mode setting initialized to false.');
      });
    } else {
      console.error('chrome.storage is not available');
    }
  });
  