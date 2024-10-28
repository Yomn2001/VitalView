document.addEventListener("DOMContentLoaded", () => {
    const audioPlayer = document.getElementById('audio-player');
    
    // Play each episode audio when an episode is clicked
    document.querySelectorAll('.episode').forEach(episode => {
        episode.addEventListener('click', () => {
            const audioSrc = episode.querySelector('.listen-button').dataset.audio;
            audioPlayer.src = audioSrc;
            audioPlayer.style.display = 'block';
            audioPlayer.play();
        });
    });
});
