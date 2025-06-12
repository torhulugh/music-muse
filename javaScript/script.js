window.onload = pageReady;
function pageReady() {
  const liveInstrumentsButton = document.getElementsByClassName("loopedInstrumentBtn");
  const oopInstrumentsButton = document.getElementsByClassName("loopedInstrumentBtn");
  const soundEffect = document.getElementsByClassName("soundeffectBtn");
  const power = document.getElementsByClassName("powerBtn");
  const tempoIncrease = document.getElementsByClassName("plus");
  const tempoDecrease = document.getElementsByClassName("minus");
  const tempoLevelIndicator = document.getElementsByClassName("nobe");

    const kick = new Audio("sound/instruments/kick.mp3");
    const bassSnare = new Audio("sound/instruments/bass-snare.mp3");
    const clap = new Audio("sound/instruments/clap.mp3");
    const clapSnap = new Audio("sound/instruments/clap-snap.mp3");
    const hardKick = new Audio("sound/instruments/hard-kick.mp3");
    const hiHat = new Audio("sound/instruments/hi-hat.mp3");
    const snare = new Audio("sound/instruments/snare.mp3");
    const timHat = new Audio("sound/instruments/tim-hat.mp3");
    const airhorn = new Audio("sound/soundEffects/airhorn.mp3");
    const chioer = new Audio("sound/soundEffects/angelical-pad.mp3");
    const strings = new Audio("sound/soundEffects/beautiful-stringt.mp3");
    const djYeahScratch = new Audio("sound/soundEffects/dj-yeah-scratch.mp3");
    const soundDrop = new Audio("sound/soundEffects/drop-sound.mp3");
    const fastForward = new Audio("sound/soundEffects/fast-forward.mp3");
    const laser = new Audio("sound/soundEffects/laser.mp3");
    const rewind = new Audio("sound/soundEffects/rewind.mp3");
    const cheer = new Audio("sound/soundEffects/cheers.mp3");
    let level1 = [];
    let level2 = [];
    let level3 = [];
    let level4 = [];
    // paly loop function
  function playKick() {
    kick.currentTime = 0; // Rewind to beginning
    kick.play();
  }
  function playSnare() {
    snare.currentTime = 0; // Rewind to beginning
    snare.play();
  }
  function playClap() {
    clap.currentTime = 0; // Rewind to beginning
    clap.play();
  }
  function playHiHat() {
    snare.currentTime = 0; // Rewind to beginning
    snare.play();
  }
  let selectedIndex = null;
// +volum
//   Array.from(tempoIncrease).forEach((plus, index) => {
//     plus.onclick = powerClicked;
//     function powerClicked() {
//       selectedIndex = index;
//       let loop = null;
//       switch (selectedIndex) {
//         case 0:
//           level1.push(1);
//           break;
//         case 1:
//           level2.push(1);
         
//           break;
//         case 2:
//           level3.push(1); 
//           break;
//         case 3:
//          level4.push(1);
         
//           break;
//         default:
//           console.log("No valid color selected");
//       }
//     }
//   });
-volum
  Array.from(tempoIncrease).forEach((minus, index) => {
    plus.onclick = powerClicked;
    function powerClicked() {
      selectedIndex = index;
      let loop = null;
      switch (selectedIndex) {
        case 0:
          level1.pop;
          break;
          
        case 1:
          level2.pop;
          break;
        case 2:
          level3.pop;
          break;
        case 3:
         level4.pop;
          break;
        default:
          console.log("No valid color selected");
      }
    }
  });
// looped instruments channel
  Array.from(LoopInstrumentsButton).forEach((loopedInstrumentBtn, index) => {
    loopedInstrumentBtn.onclick = powerClicked;
    function powerClicked() {
      selectedIndex = index;
      let loop = null;
      switch (selectedIndex) {
        case 0:
          snare.play();
          loop = setInterval(playSnare, level1.length*1000);
          break;
        case 1:
          playSnare(); 
          loop = setInterval(playSnare, level1.length*1000);
          break;
        case 2:
          playClap(); 
          loop = setInterval(playClap, level2.length*1000);
          break;
        case 3:
         playHiHat(); 
          loop = setInterval(playSnare, level3.length*1000);
          break;
        default:
          console.log("No valid color selected");
      }
    }
  });
looped instruments channel
  Array.from(power).forEach((powerBtn, index) => {
    powerBtn.onclick = powerClicked;
    function powerClicked() {
      selectedIndex = index;
      let loop = null;
      switch (selectedIndex) {
        case 0:
          playKick(); // Play immediately
          loop = setInterval(playKick, 1000);
          break;
        case 1:
          playSnare(); // Play immediately
          loop = setInterval(playSnare, 1000);
          break;
        case 2:
          playClap(); // Play immediately
          loop = setInterval(playClap, 1000);
          break;
        case 3:
          playHiHat(); // Play immediately
          loop = setInterval(playHiHat, 1000);
          break;
        default:
          console.log("No valid color selected");
      }
    }
  });

// effect channel
  Array.from(soundEffect).forEach((soundeffectBtn, index) => {
    soundeffectBtn.onclick = powerClicked;
    function powerClicked() {
      selectedIndex = index
      switch (selectedIndex) {
        case 0:
          chioer.play();
          break;
        case 1:
          djYeahScratch.play();
          break;
        case 2:
          rewind.play();
          break;
        case 3:
          airhorn.play();
          break;
        case 4:
          chioer.play();
          break;
        case 5:
          strings.play();
          break;
        case 6:
          cheer.play();
          break;
        case 7:
          chioer.play();
          break;
        case 8:
          soundDrop.play();
          break;
        
        default:
          console.log("No valid color selected");
      }
    }
  });
// live instruments
  Array.from(liveInstrumentsButton).forEach((liveInstrumentBtn, index) => {
    liveInstrumentBtn.onclick = liveInstrumentClicked;
    function liveInstrumentClicked() {
      selectedIndex = index
      switch (selectedIndex) {
        case 0:
          kick.play();
          break;
        case 1:
          snare.play();
          break;
        case 2:
          rewind.play();
          break;
        case 3:
          airhorn.play();
          break;
        case 4:
          chioer.play();
          break;
        case 5:
          strings.play();
          break;
        case 6:
          cheer.play();
          break;
        case 7:
          chioer.play();
          break;
        case 8:
          soundDrop.play();
          break;

        default:
          console.log("No valid color selected");
      }
    }
  });
//  🍇  
}
