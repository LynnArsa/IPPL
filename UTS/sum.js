function addArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

function findMax(arr) {
  return Math.max(...arr);
}

function findMin(arr) {
  return Math.min(...arr);
}

function calculateSum(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

function sortArray(arr) {
  return arr.slice().sort((a, b) => a - b);
}

module.exports = { addArrays, findMax, findMin, calculateSum, sortArray };
