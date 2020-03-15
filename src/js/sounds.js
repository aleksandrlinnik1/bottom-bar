import { findEl } from './utils';

const wrapper = findEl('.wrapper');
const buttonSound = findEl('#btn-sound');

export function initSounds() {
    wrapper.addEventListener('click', playButtonSound, true);
}

function playButtonSound({ target }) {
    if (target.classList.contains("btn")) {
        buttonSound.pause();
        buttonSound.currentTime = 0;
        buttonSound.play();
    }
}