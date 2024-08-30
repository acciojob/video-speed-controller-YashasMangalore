// script.js

document.addEventListener('DOMContentLoaded', () => {
  const video = document.querySelector('.video');
  const playButton = document.querySelector('.player__button');
  const rewindButton = document.querySelector('.rewind');
  const skipButton = document.querySelector('.skip');
  const progressBar = document.querySelector('.progress');
  const progressFilled = document.querySelector('.progress__filled');
  const volumeControl = document.querySelector('.volume');
  const playbackSpeedControl = document.querySelector('.playbackSpeed');
  const speedBar = document.querySelector('.speed-bar');

  function togglePlayPause() {
    if (video.paused) {
      video.play();
      playButton.textContent = '❚ ❚';
    } else {
      video.pause();
      playButton.textContent = '►';
    }
  }

  function updateProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.value = percent;
    progressFilled.style.width = `${percent}%`;
  }

  function changeVolume() {
    video.volume = volumeControl.value / 100;
  }

  function changePlaybackSpeed() {
    video.playbackRate = playbackSpeedControl.value;
    speedBar.textContent = `${playbackSpeedControl.value}×`;
  }

  function rewind() {
    video.currentTime -= 10;
  }

  function skip() {
    video.currentTime += 25;
  }

  playButton.addEventListener('click', togglePlayPause);
  video.addEventListener('timeupdate', updateProgress);
  volumeControl.addEventListener('input', changeVolume);
  playbackSpeedControl.addEventListener('input', changePlaybackSpeed);
  rewindButton.addEventListener('click', rewind);
  skipButton.addEventListener('click', skip);

  progressBar.addEventListener('input', () => {
    const newTime = (progressBar.value / 100) * video.duration;
    video.currentTime = newTime;
  });
});
