const voicesDropdown = document.querySelector("#voices");
const languagesDropdown = document.querySelector("#language");
const textarea = document.querySelector("#text");
const rateInput = document.querySelector("#rate");
const pitchInput = document.querySelector("#pitch");
const volumeInput = document.querySelector("#volume");
const stopButton = document.querySelector("#stop-button");
const speakButton = document.querySelector("#speak-button");

const message = new SpeechSynthesisUtterance(textarea.value);
let voices = [];
let languages = ["en-US", "es-ES", "it-IT", "ko-KR", "zh-CN", "ja-JP", "de-DE", "ru-RU"];



function populateVoices() {
  voices = speechSynthesis.getVoices();

  for(let index = 0; index < voices.length; index++) {
    const option = document.createElement("option");
    option.setAttribute("value", voices[index].name);
    option.textContent = voices[index].name

    voicesDropdown.appendChild(option);
  }
}

function setVoices() {
  for(let index = 0; index < voices.length; index++) {
    if(voicesDropdown.value === voices[index].name) {
      message.voice = voices[index];
    }
  }
}

function setLanguage() {
     
    if(languagesDropdown.value === languages[en-US]) {
        message.languages = languages[en-US];
    }

    if(languagesDropdown.value === languages[ja-JP]) {
        message.languages = languages[ja-JP];
    }

    if(languagesDropdown.value === languages[ko-KR]) {
        message.languages = languages[ko-KR];
    }
  }
  

function setRate() {
  message.rate = rateInput.value;
}

function setPitch() {
  message.pitch = pitchInput.value;
}

function setText() {
  message.text = textarea.value;
}

function setVolume() {
    message.volume = volumeInput.value;
  }

function stopVoice() {
  speechSynthesis.cancel();
}

function speakVoice() {
  speechSynthesis.speak(message);
}

speechSynthesis.addEventListener("voiceschanged", populateVoices);
voicesDropdown.addEventListener("change", setVoices);
languagesDropdown.addEventListener("change", setLanguage);
rateInput.addEventListener("change", setRate);
pitchInput.addEventListener("change", setPitch);
volumeInput.addEventListener("change", setVolume);
textarea.addEventListener("change", setText);
stopButton.addEventListener("click", stopVoice);
speakButton.addEventListener("click", speakVoice);