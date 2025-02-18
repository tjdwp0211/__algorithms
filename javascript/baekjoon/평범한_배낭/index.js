const DIR = { others: "/dev/stdin", local: `${__dirname}/input.txt` };
const fs = require("fs");

const [[N, K], ...stuffs] = fs
  .readFileSync(process.platform === "linux" ? DIR.others : DIR.local)
  .toString()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const dp = Array.from({ length: K + 1 }, () => Array.from({ length: N + 1 }, () => 0));

for (let [i, [weight, value]] of stuffs.entries()) {
  for (let k = 0; k < K + 1; k++) {
    // [i]: previous packed value
    // [i+1]: current packed value
    // [k - weight]: remain weight
    // [weight]: current weight

    if (weight <= k) {
      if (value + dp[k - weight][i] > dp[k][i]) {
        dp[k][i + 1] = value + dp[k - weight][i];
      } else {
        dp[k][i + 1] = dp[k][i];
      }
    } else {
      dp[k][i + 1] = dp[k][i];
    }
  }
}
console.log(dp[K][N]);
