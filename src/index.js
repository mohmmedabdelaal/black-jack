import '../assets/css/mdb.min.css';
import '../assets/css/style.css';
import theCards from './Cards';

import hitSound from '../assets/sounds/hit.mp3';

const hitBtn = document.querySelector('#hit-btn');
const standBtn = document.querySelector('#stand-btn');
const dealBtn = document.querySelector('#deal-btn');

const info = {
  human: { scoreSpan: '#human', div: '.human-div', score: 0 },
  bot: { scoreSpan: '#bot', div: '.bot-div', score: 0 },
  cards: theCards,
  wins: 0,
  loses: 0,
  draws: 0,
};

separate;

const { human, bot, cards } = info;
const hSound = new Audio(hitSound);

hitBtn.addEventListener('click', function () {
  const card = pickCard();
  showCard(card, human);
});

dealBtn.addEventListener('click', function () {
  //   resetCards();
});

// standBtn.addEventListener('click', function () {
//   console.log('stand button clicked');
// });
const pickCard = () => {
  return cards[Math.floor(Math.random() * 13)];
};

const showCard = (card, activePlayer) => {
  const img = document.createElement('img');
  img.className = 'col-sm-3 mt-2';
  img.src = card;
  document.querySelector(activePlayer.div).appendChild(img);
  hSound.play();
};

const resetCards = () => {
  let allImgs = document.querySelector('.ground').querySelectorAll('img');
  console.log(allImgs);
  for (let i = 0; i < allImgs.length; i++) {
    allImgs[i].remove();
  }
};
