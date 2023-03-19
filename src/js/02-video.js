import throttle from 'lodash.throttle';
import Player from '@vimeo/player';


const LOCAL_KEY = 'videoplayer-current-time';
const THROTTLE_TIME = 1000;

const player = new Player('vimeo-player');
player.setCurrentTime(getSavedVideoTime());

player.on('timeupdate', throttle(onTimeupdate, THROTTLE_TIME));

function onTimeupdate({ seconds }) {
  saveVideoTimeToLocal(seconds);
}

function saveVideoTimeToLocal(time) {
  localStorage.setItem(LOCAL_KEY, String(time));
}

function getSavedVideoTime() {
  return Number(localStorage.getItem(LOCAL_KEY)) || 0;
}
