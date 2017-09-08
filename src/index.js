let state = false;

// https://cordova.apache.org/docs/en/latest/cordova/events/events.html
// Note: Applications typically should use document.addEventListener
// to attach an event listener once the deviceready
document.addEventListener('deviceready', () => {
  document.addEventListener('pause', () => {
    state = true;
  }, false);

  document.addEventListener('resume', () => {
    state = false;
  }, false);
});

export default function isBackground() {
  return state;
}
