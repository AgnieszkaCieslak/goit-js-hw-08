import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const localStorageKey = 'videoplayer-current-time';
const throttleUpdatedTime = 1000;

const player = new Player('vimeo-player');
player.setCurrentTime(getSavedVideoTime());

player.on('timeupdate', throttle(onTimeupdate, throttleUpdatedTime));

function onTimeupdate({ seconds }) {
  saveVideoTimeToLocal(seconds);
}
function saveVideoTimeToLocal(time) {
  localStorage.setItem(localStorageKey, String(time));
}
function getSavedVideoTime() {
  return Number(localStorage.getItem(localStorageKey)) || 0;
}
