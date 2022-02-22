function getDNSStats(domains) {
  const result = {};
  const parts = domains.map(el => el.split('.').reverse().map(word => `.${word}`));

  parts.forEach(el => {
    for (let i = 0; i < el.length; i++) {
      if (i === 0) {
        if (!result.hasOwnProperty(el[i])) {
          result[el[i]] = 1;
        } else {
          result[el[i]]++;
        }
      } else {
        let elIndex = el.indexOf(el[i]);
        let current = '';

        for (let k = 0; k <= elIndex; k++) {
          current += el[k];
        }

        if (!result.hasOwnProperty(current)) {
          result[current] = 1;
        } else {
          result[current]++;
        }

      }
    }

  })

  return result
}

module.exports = {
  getDNSStats
};
