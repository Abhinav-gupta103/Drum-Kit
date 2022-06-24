function playSound(e){
        // console.log(e.keyCode);
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        if (!audio) return; // stop the function running all together
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        audio.currentTime = 0; // rewind to the start
        audio.play();
        // console.log(key);
        key.classList.add('playing');
        // key.classList.remove('playing');
}

function removeTransition(e){
    if(e.propertyName !=='transform') return; // skip it if it's not a transform
    console.log(this);
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));

window.addEventListener('keydown', playSound);
