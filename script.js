//your JS code here. If required.
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

function stopAllSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}

document.querySelectorAll('.btn').forEach(button => {
  const sound = button.getAttribute('data-sound');
  if (!sound) return;

  button.addEventListener('click', () => {
    stopAllSounds();
    const audio = document.getElementById(sound);
    audio.play();
  });
});

document.querySelector('.stop').addEventListener('click', stopAllSounds);
