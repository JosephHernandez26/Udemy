// dynamic programming
// write a function that can calculate the combination of steps
// to reach n steps
// input n=3
// constraints: 1<= n <= 45
// edge cases: no steps
// bigO: space=O(n) time=O(n)

const climbStairs = function (n) {
  let stepCombo = [1, 2];

  for (let i = 2; i < n; i++) {
    stepCombo[i] = stepCombo[i - 1] + stepCombo[i - 2];
  }
  return stepCombo[n - 1];
};
