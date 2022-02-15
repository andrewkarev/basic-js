function getCommonCharacterCount(s1, s2) {
  let arr1 = s1.split('');
  let arr2 = s2.split('');
  let first;
  let second;
  let counter = 0;


  if (arr1.length > arr2.length) {
    first = arr1;
    second = arr2;
  } else {
    first = arr2;
    second = arr1;
  }

  first.forEach(item => {
    if (second.includes(item)) {
      const index = second.indexOf(item);
      second.splice(index, 1);
      counter++
    }
  });

  return counter;
}

module.exports = {
  getCommonCharacterCount
};
