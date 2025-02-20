const DIR = { others: "/dev/stdin", local: `${__dirname}/input.txt` };
const fs = require("fs");

const INPUT = fs
  .readFileSync(process.platform === "linux" ? DIR.others : DIR.local)
  .toString()
  .split("\n");
const [N, M] = INPUT[0].split(" ").map(Number);
const matrix = INPUT.slice(1, N + 1).map((el) => el.split(" ").map(Number));
const queries = INPUT.slice(N + 1, N + 1 + M).map((el) => el.split(" ").map(Number));

// console.log("M: ", matrix);
// console.log("Q: ", queries);
const dp = Array.from({ length: N + 1 }, () => Array.from({ length: N + 1 }, () => 0));

for (let i = 1; i < N + 1; i++) {
  for (let j = 1; j < N + 1; j++) {
    dp[i][j] = dp[i - 1][j] + dp[i][j - 1] + matrix[i - 1][j - 1] - dp[i - 1][j - 1];
  }
}

for (let [x1, y1, x2, y2] of queries) {
  const [distanceX, distanceY] = [x2 - x1, y2 - y1];
  if (distanceX === 0 && distanceY === 0) {
    console.log(matrix[x1 - 1][y1 - 1]);
  } else if (x1 - 1 === 0) {
    const outOfRange = dp[x2][y1 - 1];
    console.log(dp[x2][y2] - outOfRange);
  } else if (y1 - 1 === 0) {
    const outOfRange = dp[x1 - 1][y2];
    console.log(dp[x2][y2] - outOfRange);
  } else {
    const doubleCalced = dp[x1 - 1][y1 - 1];
    const [outOfRowRange, outOfColRange] = [dp[x1 - 1][y2], dp[x2][y1 - 1]];
    console.log(dp[x2][y2] - (outOfRowRange + outOfColRange) + doubleCalced);
  }
}
