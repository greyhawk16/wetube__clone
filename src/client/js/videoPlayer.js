const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const muteBtn = document.getElementById("mute");
const volumeRange = document.getElementById("volume");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const timeline = document.getElementById("timeline");
const fullScreenBtn = document.getElementById("fullScreen");
const videoContainer = document.getElementById("videoContainer");


let volumeValue = 0.5
video.volume = volumeValue;



const handlePlayClick = (e) => {
    if (video.paused) {
        video.play();
    } else {
        video.pause()
    }
    playBtn.innerText = video.paused ? "Play" : "Pause";
};



const handleMute = (e) => {
    if (video.muted) {
        video.muted = false;
        video.volume = volumeValue;
    } else {
        video.muted = true;
    }
    muteBtn.innerText = video.muted ? "Unmute" : "Mute";
    volumeRange.value = video.muted ? 0 : volumeValue;
};
    


const handleInputVolume = (event) => {
    const {
        target: { value },
    } = event;
    if (video.muted) {
        video.muted = false;
        muteBtn.innerText = "Mute";
    }
    if (value == 0) {
        video.muted = true;
        muteBtn.innerText = "Unmute";
    }
    video.volume = value;
};
    


const handleChangeVolume = (event) => {
    const {
        target: { value },
    } = event;
    if (value != 0) {
        volumeValue = value;
    }
};



const formatTime = (sec) => new Date(sec * 1000).toISOString().substring(11, 19);

const handleLoadedMetadata = () => {
    totalTime.innerText = formatTime(Math.floor(video.duration));
    timeline.max = Math.floor(video.duration);
};

const handleTimeUpdate = () => {
    currentTime.innerText = formatTime(Math.floor(video.currentTime));
    timeline.value = Math.floor(video.currentTime);
};


const handleTimelineChange = (event) => {
    const { target: { value } } = event;
    video.currentTime = value;
};


const handleFullScreen = () => {
    const fullscreen = document.fullscreenElement;
    if (fullscreen) {
        document.exitFullscreen();
        fullScreenBtn.innerText = "Enter Full Screen";
    } else {
        videoContainer.requestFullscreen();
        fullScreenBtn.innerText = "Exit Full Screen";
    }
};


playBtn.addEventListener("click", handlePlayClick);
muteBtn.addEventListener("click", handleMute);
volumeRange.addEventListener("input", handleInputVolume);
volumeRange.addEventListener("change", handleChangeVolume);
video.addEventListener("loadedmetadata", handleLoadedMetadata)
video.addEventListener("timeupdate", handleTimeUpdate);
timeline.addEventListener("input", handleTimelineChange);
fullScreenBtn.addEventListener("click", handleFullScreen);