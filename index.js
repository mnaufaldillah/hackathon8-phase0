const playMusic = document.getElementById('music-play');
const controlMusic = document.getElementById('music-control');
const gameStart = document.getElementById('game-start');
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

const formMoney = document.getElementById('form-money');

gameStart.addEventListener('click', function(){
    gameStart.remove()

    const formText = document.createElement('h5');
    formText.innerText = 'Masukkan jumlah chip anda'
    formMoney.appendChild(formText);

    const formInput = document.createElement('input');
    formMoney.appendChild(formInput);


})