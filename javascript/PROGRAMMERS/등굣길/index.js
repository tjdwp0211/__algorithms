const MOD = 1_000_000_007;

function solution(COL, ROW, puddles) {
  const dp = Array.from({ length: ROW + 1 }, () => Array.from({ length: COL + 1 }, () => 0));
  dp[1][1] = 1;

  for (let [c, r] of puddles) {
    dp[r][c] = -1;
  }

  for (let r = 1; r < ROW + 1; r++) {
    for (let c = 1; c < COL + 1; c++) {
      if (dp[r][c] === -1) {
        dp[r][c] = 0;
      } else {
        dp[r][c] += (dp[r - 1][c] + dp[r][c - 1]) % MOD;
      }
    }
  }
  return dp[ROW][COL];
} // END OF MAIN FUNC
