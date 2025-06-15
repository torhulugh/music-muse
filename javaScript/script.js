window.onload = pageReady;
function pageReady() {
  const liveInstrumentsButton =
    document.getElementsByClassName("liveInstrumentsBtn");
  const loopInstrumentsButton = document.getElementsByClassName(
    "loopedInstrumentBtn"
  );
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
  // tempo values
  let tempo1 = 1000;
  let tempo2 = 1000;
  let tempo3 = 1000;
  let tempo4 = 1000;
  //level === tempo indicator rotation values
  let level1 = 0;
  let level2 = 0;
  let level3 = 0;
  let level4 = 0;
  let selectedIndex = null;
  let loop = null;
  //
  let tmp1 = [tempo1];

  // function to loop audio sounds
  function playKick() {
    kick.currentTime = 0;
    kick.play();
  }
  function playSnare() {
    snare.currentTime = 0;
    snare.play();
  }
  function playClap() {
    clap.currentTime = 0;
    clap.play();
  }
  function playHiHat() {
    snare.currentTime = 0;
    snare.play();
  }

  function stopAudioLoop() {
    if (loop !== null) {
      clearInterval(loop);
    }
  }

  // +volum
  Array.from(tempoIncrease).forEach((plus, index) => {
    plus.onclick = plusClicked;
    function plusClicked() {
      selectedIndex = index;
      switch (selectedIndex) {
        case 0:
          tmp1.pop();
          tmp1.push(tempo1);
          if (level1 < 330) {
            level1 += 30;
          }
          if (tempo1 < 12000) {
            tempo1 += 1000;

            console.log("+tempo1:" + tempo1);
          } else level1;
          tempoLevelIndicator[selectedIndex].style.rotate = `${level1}deg`;
          break;
        case 1:
          if (level2 < 330) {
            level2 += 30;
          }
          if (tempo2 < 12000) {
            tempo2 += 1000;
            console.log("+tempo2:" + tempo2);
          } else level3;
          tempoLevelIndicator[selectedIndex].style.rotate = `${level2}deg`;
          break;
        case 2:
          if (level3 < 330) {
            level3 += 30;
          }
          if (tempo3 < 12000) {
            tempo3 += 1000;
            console.log("+tempo3:" + tempo3);
          } else level3;
          tempoLevelIndicator[selectedIndex].style.rotate = `${level3}deg`;
          break;
        case 3:
          if (level4 < 330) {
            level4 += 30;
          }
          if (tempo4 < 12000) {
            tempo4 += 1000;
            console.log("+tempo4:" + tempo4);
          } else level4;
          tempoLevelIndicator[selectedIndex].style.rotate = `${level4}deg`;
          break;
        default:
          console.log("No valid color selected");
      }
    }
  });
  // -volum
  Array.from(tempoDecrease).forEach((minus, index) => {
    minus.onclick = minusClicked;
    function minusClicked() {
      selectedIndex = index;
      switch (selectedIndex) {
        case 0:
          if (level1 > 0) {
            level1 = level1 - 30;
          }
          if (tempo1 < 12000) {
            tempo1 = tempo1 - 1000;
            console.log("-tempo1 " + tempo1);
          } else level1;
          tempoLevelIndicator[selectedIndex].style.rotate = `${level1}deg`;

        case 1:
          if (level2 > 0) {
            level2 = level2 - 30;
          }
          if (tempo2 < 12000) {
            tempo2 = tempo2 - 1000;
            console.log("-tempo2: " + tempo2);
          } else level2;
          tempoLevelIndicator[selectedIndex].style.rotate = `${level2}deg`;
          break;
        case 2:
          if (level3 > 0) {
            level3 = level3 - 30;
          }
          if (tempo3 < 12000) {
            tempo3 = tempo3 - 1000;
            console.log("-tempo3: " + tempo3);
          } else level3;
          tempoLevelIndicator[selectedIndex].style.rotate = `${level3}deg`;
          break;
        case 3:
          if (level4 > 0) {
            level4 = level4 - 30;
          }
          if (tempo4 < 12000) {
            tempo4 = tempo4 - 1000;
            console.log("-tempo4: " + tempo4);
          } else level1;
          tempoLevelIndicator[selectedIndex].style.rotate = `${level4}deg`;
          break;
        default:
          console.log("No valid color selected");
      }
    }
  });
  // looped instruments channel
  Array.from(power).forEach((powerBtn, index) => {
    powerBtn.onclick = powerClicked;
    function powerClicked() {
      selectedIndex = index;
      switch (selectedIndex) {
        case 0:
          playKick();
          setInterval(playKick, tmp1[0]);

          break;
        case 1:
          playSnare();
          setInterval(playSnare, tempo2);
          break;
        case 2:
          playClap();
          setInterval(playClap, tempo3);
          break;
        case 3:
          playHiHat();
          setInterval(playHiHat, tempo4);
          break;
        default:
          console.log("No valid color selected");
      }
    }
  });
  // effect channel
  Array.from(soundEffect).forEach((soundeffectBtn, index) => {
    soundeffectBtn.onclick = soundEffectClicked;
    function soundEffectClicked() {
      selectedIndex = index;
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
  Array.from(liveInstrumentsButton).forEach((liveInstrumentsBtn, index) => {
    liveInstrumentsBtn.onclick = liveInstrumentClicked;
    function liveInstrumentClicked() {
      selectedIndex = index;
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
