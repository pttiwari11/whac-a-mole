// Elements
const start_sfx = new Audio('./Assets/start.mp3');
const hit_sfx = new Audio('./Assets/hit.mp3');
const hit2_sfx = new Audio('./Assets/hit2.mp3');
const peep_sfx = new Audio('./Assets/peep.mp3');
const ding_sfx = new Audio('./Assets/ding.mp3');
const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.moles');
var mole = document.querySelectorAll('.mole');
const counter = document.querySelector('.score span');
const start = document.querySelector('.start');
const retry = document.querySelector('.retry');
const timer = document.querySelector('.time span');
const velocityLevelDOM = document.querySelector('.velocity-level');
const timeLevelDOM = document.querySelector('.time-level');
const volumeLevelDOM = document.querySelector('.volume-level');
let velocity_level = 1;
let time_level = 1;
let volume_level = 1;
let count = 0;
let lastHole;
let timeUp;
let started = false;

const scoreboard = document.querySelector('.scoreboard');
const nameContainer = document.querySelector('.enterName');
const nameInput = document.querySelector('input[type=text]');
const table = document.querySelector('.scores');
let scoreboardTable;
if (localStorage.getItem('scoreboard')) {
  scoreboardTable = JSON.parse(localStorage.getItem('scoreboard'));
} else {
  scoreboardTable = [];
}
let finalScore;
let name;
const n = 0;

// Modal
const modal = document.querySelector('.modal');

modal.addEventListener('click', e => {
  e.preventDefault();
  const selection = e.target.className;
  switch (selection) {
    case 'e':
      changeVelocityLevel(null, 3)
      changeTimeLevel(null, '5')
      mole.forEach(e => {
        e.style.backgroundImage = "url('./Assets/easyMole.png')";
      });

      setTimeout(helper, 5000);
      
      break;
    case 'm':
      changeVelocityLevel(null, 1)
      changeTimeLevel(null, '30')
      mole.forEach(e => {
        e.style.backgroundImage = "url('./Assets/midMole.png')"
      });

      setTimeout(helper, 5000);

      break;
    case 'h':
      changeVelocityLevel(null, 2)
      changeTimeLevel(null, '10')
      mole.forEach(e => {
        e.style.backgroundImage = "url('./Assets/hardMole.png')"
      });

      setTimeout(helper, 5000);

      break;
  
    default:
      return
  }

  modal.classList.add('hide');
  start_sfx.currentTime = 0
  start_sfx.play()
});


// Event Listeners
start.addEventListener('click', startTime)
retry.addEventListener('click', goMenu)
holes.forEach(hole => hole.addEventListener('mousedown', up));
holes.forEach(hole => hole.addEventListener('touchstart', up));
nameInput.addEventListener('keyup', enterName);
velocityLevelDOM.addEventListener('click', changeVelocityLevel)
timeLevelDOM.addEventListener('click', changeTimeLevel)
volumeLevelDOM.addEventListener('click', changeVolumeLevel)

