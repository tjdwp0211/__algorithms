const { OTHERS, LOCAL } = { OTHERS: "/dev/stdin", LOCAL: `${__dirname}/input.txt` };
const fs = require("fs");

const [[N, K], ...coinList] = fs
  .readFileSync(process.platform === "linux" ? OTHERS : LOCAL)
  .toString()
  .split("\n")
  .map((input, i) => (i === 0 ? input.split(" ").map(Number) : Number(input)));

const coinSet = [...new Set(coinList)].sort((a, b) => a - b);
const dp = Array.from({ length: K + 1 }, () => Infinity);
dp[0] = 0;

for (let k = 1; k < K + 1; k++) {
  for (let coin of coinSet) {
    if (k < coin) continue;
    dp[k] = Math.min(dp[k - coin] + 1, dp[k]);
  }
  // console.log(`${k}: ${dp}`);
  // console.log();
}
console.log(dp[K] === Infinity ? -1 : dp[K]);
