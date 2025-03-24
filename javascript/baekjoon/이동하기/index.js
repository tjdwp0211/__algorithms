const { OTHERS, LOCAL } = { OTHERS: "/dev/stdin", LOCAL: `${__dirname}/input.txt` };
const fs = require("fs");

const [[N, M], ...matrix] = fs
  .readFileSync(process.platform === "linux" ? OTHERS : LOCAL)
  .toString()
  .trim()
  .split("\n")
  .map((input) => input.split(" ").map(Number));

const dp = Array.from({ length: N + 1 }, (_, i) =>
  Array.from({ length: M + 1 }, (_, j) => (i > 0 && j > 0 ? matrix[i - 1][j - 1] : 0))
);

for (let r = 1; r < N + 1; r++) {
  for (let c = 1; c < M + 1; c++) {
    dp[r][c] += Math.max(dp[r - 1][c], dp[r][c - 1], dp[r - 1][c - 1]);
  }
}

console.log(dp[N][M]);
