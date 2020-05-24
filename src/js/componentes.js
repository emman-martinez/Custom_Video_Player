import './../css/componentes.css';
import './../css/progress.css';

const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


const toggleVideoStatus = () => { // Play & Pause Video
    video.paused ? (video.play()) : (video.pause());
    return true;
};

const updatePlayIcon = () => { // Update play/pause icon
    video.paused ?
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>' :
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';

    return true;
};

const updateProgress = () => { // Update progress & timestamp
    progress.value = (video.currentTime / video.duration) * 100;
    // Get minutes
    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
        mins = '0' + String(mins);
    }
    // Get Seconds
    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10) {
        secs = '0' + String(secs);
    }

    timestamp.innerHTML = `${mins}:${secs}`;
    return true;
};

const setVideoProgress = () => { // Set video time to progress
    video.currentTime = (+progress.value * video.duration) / 100;
    return true;
};

const stopVideo = () => {
    video.currentTime = 0;
    video.pause();
    return true;
};

const eventos = () => { // Event Listeners
    console.log('Event Listeners');
    video.addEventListener('click', toggleVideoStatus);
    video.addEventListener('pause', updatePlayIcon);
    video.addEventListener('play', updatePlayIcon);
    video.addEventListener('timeupdate', updateProgress);

    play.addEventListener('click', toggleVideoStatus);
    stop.addEventListener('click', stopVideo);
    progress.addEventListener('change', setVideoProgress);
};

const init = () => {
    console.log('Custom Video Player');
    eventos();
};

export {
    init
}