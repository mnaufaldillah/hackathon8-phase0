const playMusic = document.getElementById('music-play');
const controlMusic = document.getElementById('music-control');
let toggle = true;

playMusic.addEventListener('click', function(){
    toggle = !toggle

    if (toggle) {
        playMusic.src = 'assets/music_background_play.png';
        controlMusic.muted = false;
        controlMusic.autoplay = true;

    } else {
        playMusic.src = 'assets/music_background_mute.png';
        controlMusic.muted = true;
    }
})