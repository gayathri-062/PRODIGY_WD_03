let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

// Function to handle user clicks
function handleClick(cellIndex) {
  if (gameOver) return;
  if (gameBoard[cellIndex] !== '') return;

  gameBoard[cellIndex] = currentPlayer;
  document.getElementById(`cell-${cellIndex}`).textContent = currentPlayer;

  // Check for winning conditions
  if (checkWin()) {
    gameOver = true;
    alert(`Player ${currentPlayer} wins!`);
  } else {
    // Switch player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

// Function to check for winning conditions
function checkWin() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winConditions.length; i++) {
    const [a, b, c] = winConditions[i];
    if (gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c] && gameBoard[a] !== '') {
      return true;
    }
  }

  return false;
}

// Function to reset the game
function resetGame() {
  currentPlayer = 'X';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  gameOver = false;

  // Clear the game board
  for (let i = 0; i < 9; i++) {
    document.getElementById(`cell-${i}`).textContent = '';
  }
}

// Add event listeners to the game board cells
for (let i = 0; i < 9; i++) {
  document.getElementById(`cell-${i}`).addEventListener('click', () => handleClick(i));
}

// Add event listener to the reset button
document.getElementById('reset-button').addEventListener('click', resetGame);