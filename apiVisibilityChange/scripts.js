const {add} = require('lodash');

const video = document.getElementById('video');

window.addEventListener('visibilitychange', (event) => {
  if (document.visibilityState === 'visible') {
    console.log('Play');
    video.play();
  } else if (document.visibilityState === 'hidden') {
    console.log('Pause');
    video.pause();
  }
});

// addEventListener('visibilitychange', () =>
//   document.visibilityState === 'visible' ? video.play() : video.pause()
// );
