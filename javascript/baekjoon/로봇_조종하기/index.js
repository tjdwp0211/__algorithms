const { OTHERS, LOCAL } = { OTHERS: "/dev/stdin", LOCAL: `${__dirname}/input.txt` };
const fs = require("fs");

const [[N, M], ...matrix] = fs
  .readFileSync(process.platform === "linux" ? OTHERS : LOCAL)
  .toString()
  .split("\n")
  .map((input) => input.split(" ").map(Number));

const dp = Array.from({ length: N }, (_, i) =>
  Array.from({ length: M }, (_, j) => {
    if (i === 0) {
      return matrix[i][j];
    }
    return 0;
  })
);

for (let col = 1; col < M; col++) {
  dp[0][col] += dp[0][col - 1];
}
// for (let d of dp) console.log(d);

const [startLeft, startRight] = [Array.from({ length: M }, () => 0), Array.from({ length: M }, () => 0)];

for (let row = 1; row < N; row++) {
  // L to R: ->
  startLeft[0] = matrix[row][0] + dp[row - 1][0];
  for (let l = 1; l < M; l++) {
    startLeft[l] = Math.max(startLeft[l - 1], dp[row - 1][l]) + matrix[row][l];
  }
  // R to L: <-
  startRight[M - 1] = matrix[row][M - 1] + dp[row - 1][M - 1];
  for (let r = M - 2; -1 < r; r--) {
    startRight[r] = Math.max(startRight[r + 1], dp[row - 1][r]) + matrix[row][r];
  }

  for (let col = 0; col < M; col++) {
    dp[row][col] = Math.max(startLeft[col], startRight[col]);
  }
}

// for (let d of dp) console.log(d);
console.log(dp[N - 1][M - 1]);
