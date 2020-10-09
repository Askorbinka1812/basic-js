const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let sum = 0;
  for (let arr of matrix){
    for(let item of arr){
    if(item === "^^"){
      sum += 1;
      }
    }
  }
  return sum;
};
