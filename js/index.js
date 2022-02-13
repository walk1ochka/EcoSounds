const svgPlay = document.getElementById('svg__play');
const svgPause = document.getElementById('svg__pause');
const headerItems = document.querySelector('.header__items');
const main = document.querySelector('main');
var prevBg = 1;
let current = 0;
const birdNames = ["Соловей", "Иволга", "Жаворонок", "Сова", "Дрозд"]
const audios = [new Audio('audio/audio1.mp3'), new Audio('audio/audio2.mp3'), new Audio('audio/audio3.mp3'), new Audio('audio/audio4.mp3'), new Audio('audio/audio5.mp3')]





headerItems.addEventListener('click', e => {
    e.stopPropagation();
    const activeBtn = document.querySelector('.button-active');
    const target = e.target;
    const btnName = target.innerHTML;
    if (target.classList.contains('button'))
    {
        target.classList.add('button-active');
        activeBtn.classList.remove('button-active');
        if (!audios[current].paused)
            {
                pauseAudio();
                current = birdNames.indexOf(btnName);
                playAudio();
            }
        current = birdNames.indexOf(btnName);
        changeBg(current);    
    }
});

 function toggleAudio() {
    !(audios[current].paused) ? pauseAudio() : playAudio();
 }

 function pauseAudio() {
     let currentAudio = audios[current];
     currentAudio.pause();
     svgPause.classList.add('button-unactive');
     svgPlay.classList.remove('button-unactive');
 }

 function playAudio() {
    let currentAudio = audios[current];
    currentAudio.play();
    svgPlay.classList.add('button-unactive');
    svgPause.classList.remove('button-unactive');
    currentAudio.loop=true;
}

function changeBg(num) {
    const className = `bg${num+1}`;
    main.classList.remove(`bg${prevBg}`);
    main.classList.add(className);
    prevBg = num+1;
}