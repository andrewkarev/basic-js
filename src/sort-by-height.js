function sortByHeight(arr) {
  const validArr = arr.filter(num => num !== -1).sort((a, b) => a - b);

  let result = [];
  let counter = 0;

  for (let elem of arr) {
    if (elem === -1) {
      result.push(elem);
    } else {
      result.push(validArr[counter]);
      counter++;
    }
  }

  return result;
}

module.exports = {
  sortByHeight
};
