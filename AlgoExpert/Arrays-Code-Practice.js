'use strict';

/// Algo Expert Arrays Practice

// Two-Number Sum
const twoNumSum = (arr, targetSum) => {
  const numsTable = {};
  for (let num in arr) {
    let targetNum = targetSum - num;
    if (targetNum in numsTable) return [targetNum, num];
    else targetNum[num] = true;
  }
  return [];
};

//
