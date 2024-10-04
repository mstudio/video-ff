// fast forward ad to the end when Backspace or Delete is pressed
const handleKeydown = (event) => {
    if (event.key === 'Backspace' || event.key === 'Delete') {
        const ad = [...document.querySelectorAll('.ad-showing')][0];
        if (ad != null) {
            console.log('found ad ', ad);
            const video = document.querySelector('video');

            if (video) {
                console.log('found video with duration: ' + video.duration)
                video.currentTime = video.duration;


            }
        }
    }
    if (event.key === '\\' || event.code === 'Backslash' || event.key === 's' || event.code === 'KeyS') {
        const skipButton = document.querySelector('.ytp-ad-skip-button-modern');
        if (skipButton != null) {
            skipButton.click();
        }
    }
}

window.removeEventListener('keydown', handleKeydown);
window.addEventListener('keydown', handleKeydown);