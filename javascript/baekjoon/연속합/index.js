const { OTHERS, LOCAL } = { OTHERS: "/dev/stdin", LOCAL: `${__dirname}/input.txt` };
const fs = require("fs");

const [N, sequence] = fs
  .readFileSync(process.platform === "linux" ? OTHERS : LOCAL)
  .toString()
  .split("\n")
  .map((input, i) => (i === 0 ? Number(input) : input.split(" ").map(Number)));

const dp = Array.from({ length: N + 1 }, () => 0);
dp[1] = sequence[0];

for (let i = 2; i < N + 1; i++) {
  if (dp[i - 1] < 0) {
    dp[i] = sequence[i - 1];
  } else {
    dp[i] = dp[i - 1] + sequence[i - 1];
  }
}
console.log(Math.max(...dp.slice(1)));
