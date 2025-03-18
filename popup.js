document.getElementById("togglePause").addEventListener("change", function() {
    let enabled = this.checked;
    chrome.storage.sync.set({ autoPauseEnabled: enabled });
});
