const { OTHERS, LOCAL } = { OTHERS: "/dev/stdin", LOCAL: `${__dirname}/input.txt` };
const fs = require("fs");

const [R, G, B] = [0, 1, 2];

const [N, ...matrix] = fs
  .readFileSync(process.platform === "linux" ? OTHERS : LOCAL)
  .toString()
  .split("\n")
  .map((input, i) => (i === 0 ? Number(input) : input.split(" ").map(Number)));

const dp = Array.from({ length: N + 1 }, () => Array.from({ length: 3 }, () => 0));
[dp[1][R], dp[1][G], dp[1][B]] = [matrix[0][R], matrix[0][G], matrix[0][B]];

for (let i = 2; i < N + 1; i++) {
  // for (let [cur, d] of dp.entries()) console.log(cur, d);
  // console.log();
  for (let color = 0; color < 3; color++) {
    if (color === R) {
      dp[i][R] = Math.min(dp[i - 1][G], dp[i - 1][B]) + matrix[i - 1][R];
    } else if (color === G) {
      dp[i][G] = Math.min(dp[i - 1][R], dp[i - 1][B]) + matrix[i - 1][G];
    } else if (color === B) {
      dp[i][B] = Math.min(dp[i - 1][R], dp[i - 1][G]) + matrix[i - 1][B];
    }
  }
}

console.log(Math.min(...dp[N]));
