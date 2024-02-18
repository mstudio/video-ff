if (window.ffIntId) {
  clearInterval(window.ffIntId);
}

window.ffIntId = setInterval(() => {
  const ad = [...document.querySelectorAll('.ad-showing')][0];
  if (ad != null) {
    const video = document.querySelector('video');
    // fast forward to the end of the ad
    if (!isNaN(video.duration) && video.duration > 0) {
      console.log('Ad duration:', video.duration);
      video.currentTime = video.duration;
    }
    setTimeout(() => {
      const skipButton = document.querySelector('.ytp-ad-skip-button-modern');
      // wait a moment, then click on the skip button
      if (skipButton != null) {
        skipButton.click();
        console.log(`Skipped ad.`);
      }
    }, 500);
  }
}, 650);