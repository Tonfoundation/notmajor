const video = document.getElementById('video');
const playButton = document.getElementById('playButton');
const placeholder = document.getElementById('placeholder');

playButton.addEventListener('click', () => {
    if (video.style.display === 'none') {
        placeholder.style.display = 'none'; // Hide placeholder
        video.style.display = 'block'; // Show video
        video.muted = false; // Unmute the video
        video.play(); // Start playing the video
    } else {
        video.pause();
        video.style.display = 'none'; // Hide video
        placeholder.style.display = 'flex'; // Show placeholder
    }
});

video.addEventListener('ended', () => {
    video.style.display = 'none'; // Hide video
    placeholder.style.display = 'flex'; // Show placeholder
});
