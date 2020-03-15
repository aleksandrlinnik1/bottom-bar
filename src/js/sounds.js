import { findEl } from './utils';

const wrapper = findEl('.wrapper');
const buttonSound = findEl('#btn-sound');

export function initSounds() {
    wrapper.addEventListener('click', playButtonSound, true);
}

function playButtonSound({ target: { classList } }) {
    if (classList.contains("btn") && !classList.contains('disabled')) {
        buttonSound.pause();
        buttonSound.currentTime = 0;
        buttonSound.play();
    }
}