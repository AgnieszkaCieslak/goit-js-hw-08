import throttle from 'lodash.throttle'
import Vimeo from '@vimeo/player';

const localStorageKey = 'videoplayer-current-time';
const throttleUpdatedTime = 1000;

const player = new Vimeo('vimeo-player');
player.setCurrentTime(getSavedTime());


function saveTimeLocal(time) {
  localStorage.setItem(localStorageKey, String(time));
}
function timeUpdate({seconds}) {
  saveTimeLocal(seconds);
}
function getSavedTime() {
  return Number(localStorage.getItem(localStorageKey)) || 0;
}

player.on('updatedTime', throttle(timeUpdate, throttleUpdatedTime));
