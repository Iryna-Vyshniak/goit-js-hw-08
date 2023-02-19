import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// --------------- 1st variant --------------------

// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);

// const onPlay = function (data) {
//     localStorage.setItem('videoplayer-current-time', data.seconds);
// };

// player.on('timeupdate', throttle(onPlay, 1000));

// const currentTime = Number(localStorage.getItem('videoplayer-current-time'));

// player.setCurrentTime(currentTime).then(function (seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function (error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;
//         default:
//             // some other error occurred
//             break;
//     }
// });

// player.setColor('#45a247').then(function (color) {
//     // the color that was set
// }).catch(function (error) {
//     // an error occurred setting the color
// });

// --------------- 2nd variant --------------------
const CURRENT_TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe, {
  loop: true,
  fullscreen: true,
  quality: '1080p',
});

const getCurrentTime = function (currentTime) {
  const seconds = currentTime.seconds;
  localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(seconds));
};

player.on('timeupdate', throttle(getCurrentTime, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_TIME_KEY)) || 0);

player
  .setColor('#d8e0ff')
  .then(function (color) {
    console.log('The new color value: #D8E0FF');
  })
  .catch(function (error) {
    console.log('An error occurred while setting the color');
  });
