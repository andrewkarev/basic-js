function minesweeper(matrix) {
  const boardWidth = matrix[0].length;
  const boardHeight = matrix.length;
  let result = [];

  for (let i = 0; i < boardHeight; i++) {
    result[i] = [];

    for (let k = 0; k < boardWidth; k++) {
      let counter = 0;

      if (matrix[i - 1]) {
        if (matrix[i - 1][k - 1]) counter++;
        if (matrix[i - 1][k]) counter++;
        if (matrix[i - 1][k + 1]) counter++;
      }

      if (matrix[i][k - 1]) counter++;
      if (matrix[i][k + 1]) counter++;

      if (matrix[i + 1]) {
        if (matrix[i + 1][k - 1]) counter++;
        if (matrix[i + 1][k]) counter++;
        if (matrix[i + 1][k + 1]) counter++;
      }

      result[i].push(counter);
    }
  }

  return result
}

module.exports = {
  minesweeper
};
