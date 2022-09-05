import '../assets/css/mdb.min.css';
import '../assets/css/style.css';

import imgCard from '../assets/images/10.png';

const hitBtn = document.querySelector('#hit-btn');
const standBtn = document.querySelector('#stand-btn');
const dealBtn = document.querySelector('#deal-btn');

const info = {
  human: { scoreSpan: '#human', div: '.human-board', score: 0 },
  bot: { scoreSpan: '#bot', div: '.bot-board', score: 0 },
};

hitBtn.addEventListener('click', function () {
  console.log('hit button clicked');
});
standBtn.addEventListener('click', function () {
  console.log('stand button clicked');
});
dealBtn.addEventListener('click', function () {
  console.log('deal button clicked');
});
