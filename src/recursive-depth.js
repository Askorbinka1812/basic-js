const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    let underArray = arr.filter(a => Array.isArray(a));
    return underArray.length ? this.calculateDepth(underArray.flat(), depth + 1) : depth;
  }
};