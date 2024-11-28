const video = document.getElementById('video');
const playButton = document.getElementById('playButton');

playButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        video.muted = false; // Enable sound
        playButton.innerHTML = '<img src="./crooked_star.png" alt="Pause Icon" class="button-icon">';
    } else {
        video.pause();
        playButton.innerHTML = '<img src="./crooked_star.png" alt="Play Icon" class="button-icon">';
    }
});
