function encodeLine(str) {
  let answer = '';
  let counter = 1;

  for (let i = 0; i < str.length; i++) {

    if (str[i] === str[i + 1]) {
      counter++;
    } else {
      if (counter === 1) {
        answer += str[i];
      } else {
        answer += counter + str[i];
        counter = 1;
      }
    }
  }

  return answer;
}

module.exports = {
  encodeLine
};
