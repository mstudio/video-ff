if (window.ffIntId) {
    clearInterval(window.ffIntId);
}

let fastForwarding = false;

window.ffIntId = setInterval(() => {
    if (!fastForwarding){
        const ad = [...document.querySelectorAll('.ad-showing')][0];
        if (ad != null) {
            const video = document.querySelector('video');
            // fast forward ad
            if (video) {
                video.playbackRate = 20; 
                video.volume = 0;
                fastForwarding = true;
                clearTimeout(window.clearFFTimeoutId);
                window.clearFFTimeoutId = setTimeout(() => {
                    fastForwarding = false;
                }, 5000);
            }
        }
    }
}, 1000);