import { initBets } from './bet';
import { initSounds } from './sounds';
import { findEl } from './utils';

initSounds();
initBets();

const infoButton = findEl('.btn-info');
const turbo = findEl('.turbo');
const turboCheckbox = findEl('.checkbox', turbo);

infoButton.addEventListener('click', openInfo, true);
turboCheckbox.addEventListener('click', toggleTurbo);

function openInfo() {
    alert('info')
}

function toggleTurbo() {
    turbo.classList.toggle('on');
}