//Given an array of integers, find the pair of adjacent elements
//that has the largest product and return the product

adjElementsProduct = (inputArr) => {
  let maxAdjEl = inputArr[0] * inputArr[1];

  for (let i = 1; i < inputArr.length - 1; i++) {
    if (findAdjEl(inputArr, i) > maxAdjEl) {
      maxAdjEl = findAdjEl(inputArr, i);
    }
  }
  return maxAdjEl;
};

findAdjEl = (inputArr, index) => {
  return inputArr[index] * inputArr[index + 1];
};
