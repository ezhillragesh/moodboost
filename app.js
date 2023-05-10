const audio = new Audio();

const romanticBtn = document.getElementById('romantic');
const sadBtn = document.getElementById('sad');
const hopefulBtn = document.getElementById('hopeful');
const relaxBtn = document.getElementById('relax');
const happyBtn = document.getElementById('happy');
relaxBtn.addEventListener('click', () => {
    audio.src = 'assests\\relax.mp3';
    audio.play();
});

romanticBtn.addEventListener('click', () => {
    audio.src = 'assests\\romantic.mp3';
    audio.play();
});
sadBtn.addEventListener('click', () => {
  audio.src = 'assests\\sad.mp3';
  audio.play();
});
  
hopefulBtn.addEventListener('click', () => {
  audio.src = 'assests\\hopeful.mp3';
  audio.play();
});
happyBtn.addEventListener('click', () => {
  audio.src = 'assests\\happy.mp3';
  audio.play();
});

document.addEventListener('keyup', (event) => {
  if (event.key === 'p') {
    audio.pause();
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
});

relaxBtn.addEventListener('click', function onClick(event) {
  
  document.body.style.backgroundColor = '#ffddd3';
  document.body.style.color = 'black';
});
romanticBtn.addEventListener('click', function onClick(event) {
  
  document.body.style.backgroundColor = '#E9606C';
  document.body.style.color = 'white';
});

sadBtn.addEventListener('click', function onClick(event) {
  
  document.body.style.backgroundColor = '#1d1e1f';
  document.body.style.color = 'white';
});

happyBtn.addEventListener('click', function onClick(event) {
  
  document.body.style.backgroundColor = '#F8D664';
  document.body.style.color = 'black';
  document.button.style.color='white'
});

hopefulBtn.addEventListener('click', function onClick(event) {
  
  document.body.style.backgroundColor = '#d65bbe';
  document.body.style.color = 'white';
});


