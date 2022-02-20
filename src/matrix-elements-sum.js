function getMatrixElementsSum(matrix) {
  const subArrLength = matrix[0].length;
  const flatMatrix = matrix.flat(1);
  const sum = flatMatrix.reduce((acc, el, index, arr) => (arr[index - subArrLength] === 0) ? acc : acc += el, 0)
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
