chrome.tabs.onActivated.addListener(async (activeInfo) => {
  let tab = await chrome.tabs.get(activeInfo.tabId);
  checkAndPause(tab);
});

chrome.windows.onFocusChanged.addListener(async (windowId) => {
  if (windowId === chrome.windows.WINDOW_ID_NONE) return; 
  let tabs = await chrome.tabs.query({ active: true, windowId });
  if (tabs.length > 0) checkAndPause(tabs[0]);
});

async function checkAndPause(tab) {
  if (tab.url.includes("youtube.com/watch")) {
      chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: toggleVideoPlayback,
          args: [tab.active]
      });
  }
}

function toggleVideoPlayback(isActive) {
  let video = document.querySelector("video");
  if (video) {
      isActive ? video.play() : video.pause();
  }
}
