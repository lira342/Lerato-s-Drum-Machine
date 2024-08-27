
    window.addEventListener('keydown', function(event) {
      const key = event.key.toUpperCase();
      const drumPad = document.getElementById(key);
      if (drumPad) {
        const audioElement = drumPad.querySelector('.clip');
        if (audioElement) {
          audioElement.currentTime = 0; // Rewind the audio to the beginning
          audioElement.play();
          displayClipName(drumPad.id);
        }
      }
    });

    const drumPads = document.getElementsByClassName('drum-pad');
    for (let i = 0; i < drumPads.length; i++) {
      drumPads[i].addEventListener('click', function() {
        const audioElement = this.querySelector('.clip');
        if (audioElement) {
          audioElement.currentTime = 0; // Rewind the audio to the beginning
          audioElement.play();
          displayClipName(this.id);
        }
      });
    }

    function displayClipName(clipName) {
      const display = document.getElementById('display');
      display.textContent = clipName;
    }
  
