function repeater(str, options) {
  const additionsArr = [];

  for (let i = 0; i < options.additionRepeatTimes; i++) {
    additionsArr.push(String(options.addition));
  }

  const additionalStr = additionsArr.join(options.additionSeparator || '|');

  if (additionalStr.length !== 0) {
    additionsArr.length = 0;

    for (let j = 0; j < options.repeatTimes; j++) {
      additionsArr.push(String(str) + additionalStr);
    }

  } else {
    if (!options.repeatTimes) {
      additionsArr.push(String(str) + String(options.addition));
    } else {
      for (let j = 0; j < options.repeatTimes; j++) {
        !options.addition ? additionsArr.push(String(str)) : additionsArr.push(String(str) + String(options.addition));
      }
    }

  }

  return additionsArr.join(options.separator || '+');
}



module.exports = {
  repeater
};
