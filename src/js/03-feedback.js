import throttle from 'lodash.throttle'

const localStorageKey = 'feedback-form-state';
const throttleUpdateTime = 500;

const emailMarker = document.querySelector('.feedback-form');
const textMarker = getTextMarker();



emailMarker.addEventListener('input', throttle(inputForm, throttleUpdateTime));
emailMarker.addEventListener('submit', e => e.preventDefault());


function inputForm(e) {
  textMarker[e.target.name] = e.target.value;
  savedTextMarker(textMarker);
}

function savedTextMarker(textMarker) {
  localStorage.setItem(localStorageKey, JSON.stringify(textMarker))
}

function getTextMarker() {
  const defaultTextMarker = getDefaultTextMarker(emailMarker);
  try {
    return JSON.parse(localStorage.getItem(localStorageKey)) || defaultTextMarker;
  } catch (e) {
    return defaultTextMarker;
  }
}

function completeForm(emailMarker, textMarker) {
  [... emailMarker.elements].forEach(el => el.value = textMarker[el.name])
}
completeForm(emailMarker, textMarker);


function getDefaultTextMarker( emailMarker) {
  return [... emailMarker.elements]
    .filter(it => it.hasAttribute('name'))
    .reduce((acc, it) => ({
      ...acc,
      [it.getAttribute('name')]: '',
    }), {})
}
