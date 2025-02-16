const DIR = { other: "/dev/stdin", local: `${__dirname}/input.txt` };

function main(N, wine) {
  const dp = Array.from({ length: N + 1 }, () => 0);
  dp[1] = wine[0];
  dp[2] = wine[0] + wine[1];
  dp[3] = Math.max(wine[0] + wine[1], wine[0] + wine[2], wine[1] + wine[2]);

  for (let i = 4; i < N + 1; i++) {
    dp[i] = Math.max(dp[i - 3] + wine[i - 2] + wine[i - 1], dp[i - 2] + wine[i - 1], dp[i - 1]);
  }

  return dp[N];
}

const fs = require("fs");
const INPUT = fs
  .readFileSync(process.platform === "linux" ? DIR.other : DIR.local)
  .toString()
  .split("\n");

const N = Number(INPUT[0]);
const wines = INPUT.slice(1, N + 1).map(Number);

console.log(main(N, wines));

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

// function main(N, wine) {
//   const dp = Array.from({ length: N + 1 }, () => 0);
//   dp[1] = wine[0];
//   dp[2] = wine[0] + wine[1];
//   dp[3] = Math.max(wine[0] + wine[2], wine[1] + wine[2], wine[0] + wine[1]);
//   for (let i = 4; i < N + 1; i++) {
//     dp[i] = Math.max(dp[i - 3] + wine[i - 2] + wine[i - 1], dp[i - 2] + wine[i - 1], dp[i - 1]);
//   }

//   return dp[N];
// }
