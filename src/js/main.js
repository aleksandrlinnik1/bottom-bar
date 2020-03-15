import { initBets } from './bet';
import { findEl } from './utils';

initBets();

const wrapper = findEl('.wrapper');
const buttonSound = findEl('#btn-sound');
const infoButton = findEl('.btn-info');
const turbo = findEl('.turbo');
const turboCheckbox = findEl('.checkbox', turbo);

wrapper.addEventListener('click', playButtonSound, true);
infoButton.addEventListener('click', openInfo, true);
turboCheckbox.addEventListener('click', toggleTurbo);

function playButtonSound({ target }) {
    if (target.classList.contains("btn")) {
        buttonSound.pause();
        buttonSound.currentTime = 0;
        buttonSound.play();
    }
}

function openInfo() {
    alert('info')
}

function toggleTurbo() {
    turbo.classList.toggle('on');
}