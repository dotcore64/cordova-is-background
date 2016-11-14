let state = false;

document.addEventListener('pause', () => {
  state = true;
}, false);

document.addEventListener('resume', () => {
  state = false;
}, false);

export default function isBackground() {
  return state;
}
