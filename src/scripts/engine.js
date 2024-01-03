const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input")
const keysCheck = document.querySelector(".keys-check input");
let mapedKey = [];
let audio = new Audio("./src/tunes/a.wav");
const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`
    audio.play();

    const clickedKey = 
    document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
};
   

pianoKeys.forEach((key) => {
    console.log(key.dataset.key); 
    key.addEventListener("click", () => playTune(key.dataset.key));
    mapedKey.push(key.dataset.key); 

});

document.addEventListener("keydown",
(e) => {
    if (mapedKey.includes(e.key)) {
        playTune(e.key);
    }
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
};

const showHiderKeys = () => {
    pianoKeys.forEach((key) => key.
    classList.toggle("hide"));
};

volumeSlider.addEventListener("input", handleVolume);

keysCheck.addEventListener("click",
 showHiderKeys);