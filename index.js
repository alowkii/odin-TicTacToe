var count = 0;
var winner = "";

function cellClick(num) {
  
}

function putMarkAt(cellNo) {
  count++;
  var mark = count % 2 === 0 ? 'O' : 'X';
  
  var cellClass = `c${cellNo}`;
  cell = document.getElementById(cellClass);
  if(mark === 'O') {
    cell.innerHTML = `<img src="circle.png" alt="" width="110px">`;
  } else {
    cell.innerHTML = `<img src="cross.png" alt="" width="100px">`;
  }
}

function checkWinner() {
  var c0 = document.getElementById('c0').innerHTML;
  var c1 = document.getElementById('c1').innerHTML;
  var c2 = document.getElementById('c2').innerHTML;
  var c3 = document.getElementById('c3').innerHTML;
  var c4 = document.getElementById('c4').innerHTML;
  var c5 = document.getElementById('c5').innerHTML;
  var c6 = document.getElementById('c6').innerHTML;
  var c7 = document.getElementById('c7').innerHTML;
  var c8 = document.getElementById('c8').innerHTML;

  if(c0 === c1 && c1 === c2 && c0 !== '') {
    announceWinner(c0);
    resetGame();
  } else if(c3 === c4 && c4 === c5 && c3 !== '') {
    announceWinner(c3);
    resetGame();
  } else if(c6 === c7 && c7 === c8 && c6 !== '') {
    announceWinner(c6);
    resetGame();
  } else if(c0 === c3 && c3 === c6 && c0 !== '') {
    announceWinner(c0);
    resetGame();
  } else if(c1 === c4 && c4 === c7 && c1 !== '') {
    announceWinner(c1);
    resetGame();
  } else if(c2 === c5 && c5 === c8 && c2 !== '') {
    announceWinner(c2);
    resetGame();
  } else if(c0 === c4 && c4 === c8 && c0 !== '') {
    announceWinner(c0);
    resetGame();
  } else if(c2 === c4 && c4 === c6 && c2 !== '') {
    announceWinner(c2);
    resetGame();
  } else if(count === 9) {
    announceWinner('draw');
    resetGame();
  }
}

function setPlayerCard(num) {
  var playerCard = document.querySelector(`.btn${num}`);
  playerCard.setAttribute('id', 'playerCard');
  playerCard.style.backgroundColor = '#555';
  if(num === 0) {
    computerCard = document.querySelector('.btn1');
    computerCard.setAttribute('id', 'computerCard');
    computerCard.style.backgroundColor = '#333';
  } else {
    computerCard = document.querySelector('.btn0');
    computerCard.setAttribute('id', 'computerCard');
    computerCard.style.backgroundColor = '#333';
  }
}

function getPlayerCard(){
  var playerCard = document.getElementById('playerCard');
  return playerCard;
}

function getComputerCard(){
  var computerCard = document.getElementById('computerCard');
  return computerCard;
}

function announceWinner(winner) {
  if(winner === 'draw') {
    alert('It\'s a draw!');
  } else {
    if(getPlayerCard().innerHTML === 'X'){
    }
    alert(`Player ${winner} wins!`);
  }
  setScore();
  startGame();
}

function setScore() {
  var playerScore = document.getElementById('playerScore');
  var compScore = document.getElementById('compScore');
  if(winner === 'player') {
    playerScore.innerHTML = parseInt(playerScore.innerHTML) + 1;
  } else {
    compScore.innerHTML = parseInt(compScore.innerHTML) + 1;
  }
}

function resetBoard() {
  count = 0;
  for(var i = 0; i <= 9; i++) {
    var cellClass = `c${i}`;
    cell = document.getElementById(cellClass);
    cell.innerHTML = '';
  }
}

function startGame() {
  if(getPlayerCard() === null) {
    alert('Please select a card');
    return;
  }
  setScore();
  resetBoard();
}

function resetGame() {
  var playerScore = document.getElementById('playerScore');
  var compScore = document.getElementById('compScore');
  playerScore.innerHTML = 0;
  compScore.innerHTML = 0;
  resetBoard();
}