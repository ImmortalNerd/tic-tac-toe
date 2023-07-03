import React from 'react'

function checkGameWinner(array) {
  const directions = [
    [0, 1], // Right
    [1, 0], // Down
    [1, 1], // Diagonal (down-right)
    [1, -1], // Diagonal (down-left)
  ];

  function isWinningCombination(startIndex, direction) {
    const value = array[startIndex];
    if (value === "") {
      return false; // Empty cell, not a winning combination
    }

    for (let step = 1; step < 3; step++) {
      const [dx, dy] = direction;
      const x = (startIndex % 3) + dx * step;
      const y = Math.floor(startIndex / 3) + dy * step;
      const index = y * 3 + x;

      if (array[index] !== value) {
        return false; // Values don't match, not a winning combination
      }
    }

    return true; // All values match, it's a winning combination
  }

  for (let index = 0; index < 9; index++) {
    const currentValue = array[index];

    if (currentValue === "") {
      continue; // Empty cell, skip to the next iteration
    }

    for (let direction of directions) {
      if (isWinningCombination(index, direction)) {
        return currentValue; // Found a winner
      }
    }
  }

  return null; // No winner
}