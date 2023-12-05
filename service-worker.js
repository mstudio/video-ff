function fastForward() {
    const ad = [...document.querySelectorAll('.ad-showing')][0];
    if (ad != null) {
        const video = document.querySelector('video');
        // fast forward to the end of the ad
        video.currentTime = video.duration;
        setTimeout(() => {
            const skipButton = document.querySelector('.ytp-ad-skip-button-modern');
            // wait a moment, then click on the skip button
            if (skipButton != null) {
                skipButton.click();
            } else {
                console.log('no skip button found');
            }
        }, 500);
    } else {
        console.log('no ad found');
    }
}

// when the button is clicked, execute the function within the current tab
chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: fastForward
    });
});