// Check subarray if all are the same value and return the number if true
const evaluateBoard = (subarray) => {
  let winner;
  if (
    subarray.every(
      (value, index, array) => value === array[0] && value !== null
    )
  ) {
    winner = subarray[0];
    return winner;
  }
};

export const checkBoard = (board) => {
  // "Length" of a side
  const boardDimension = Math.sqrt(board.length);

  for (let i = 0; i < boardDimension; i++) {
    // Get rows
    const rows = board.slice(
      i * boardDimension,
      i * boardDimension + boardDimension
    );

    // Get columns
    const columns = board.filter((value, index) => {
      return (index + i) % boardDimension === 0;
    });

    // Get left to right diagonal
    const diagonalOne = board
      .map((value, index, array) => {
        return array[index + boardDimension * index];
      })
      .slice(0, boardDimension);

    // Get right to left diagonal
    const diagonalTwo = board
      .map((value, index, array) => {
        return array[boardDimension - 1 + (boardDimension - 1) * index];
      })
      .slice(0, boardDimension);

    if (evaluateBoard(rows)) return evaluateBoard(rows);
    if (evaluateBoard(columns)) return evaluateBoard(columns);
    if (evaluateBoard(diagonalOne)) return evaluateBoard(diagonalOne);
    if (evaluateBoard(diagonalTwo)) return evaluateBoard(diagonalTwo);
  }
};
