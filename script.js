//your JS code here. If required.
const sounds = ['clap', 'kick', 'snare', 'boom'];

const audioElements = {};

sounds.forEach(sound => {
  audioElements[sound] = new Audio(`./sounds/${sound}.mp3`);
});

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const sound = button.getAttribute('data-sound');
    stopAllSounds();
    audioElements[sound].currentTime = 0; // rewind
    audioElements[sound].play();
  });
});

document.querySelector('.stop').addEventListener('click', stopAllSounds);

function stopAllSounds() {
  Object.values(audioElements).forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
}
