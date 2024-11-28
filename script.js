const video = document.getElementById('video');
const playButton = document.getElementById('playButton');
const placeholder = document.getElementById('placeholder');

// Event listener for play button
playButton.addEventListener('click', () => {
    if (video.paused || video.style.display === 'none') {
        // Ensure placeholder is hidden and video is displayed before starting playback
        placeholder.style.display = 'none'; // Hide placeholder
        video.style.display = 'block'; // Show video
        video.muted = false; // Unmute the video
        video.play().then(() => {
            console.log("Video started playing immediately.");
        }).catch((error) => {
            console.error("Video playback failed:", error); // Log any playback issues
        });
    } else {
        video.pause(); // Pause the video
        video.style.display = 'none'; // Hide video
        placeholder.style.display = 'flex'; // Show placeholder
    }
});

// Event listener for when the video ends
video.addEventListener('ended', () => {
    video.style.display = 'none'; // Hide video
    placeholder.style.display = 'flex'; // Show placeholder
});
