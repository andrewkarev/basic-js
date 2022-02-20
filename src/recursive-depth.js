class DepthCalculator {
  calculateDepth(arr) {
    let counter = 1;

    for (let elem of arr) {
      let currentDepth = 1;

      if (Array.isArray(elem)) {
        currentDepth += this.calculateDepth(elem);
      }

      if (currentDepth > counter) {
        counter = currentDepth;
      }

    }

    console.log(counter)
    return counter;
  }
}

module.exports = {
  DepthCalculator
};
