const DIR = { others: "/dev/stdin", local: `${__dirname}/input.txt` };
const fs = require("fs");

const N = fs.readFileSync(process.platform === "linux" ? DIR.others : DIR.local);
const dp = Array.from({ length: N }, () => Array.from({ length: 10 }, () => 1));
const MOD = 1_000_000_000;

for (let i = 1; i < N; i++) {
  for (let j = 0; j < 10; j++) {
    if (j === 0) {
      dp[i][j] = dp[i - 1][1] % MOD;
    } else if (0 < j && j < 9) {
      dp[i][j] = dp[i - 1][j - 1] + (dp[i - 1][j + 1] % MOD);
    } else {
      dp[i][j] = dp[i - 1][8] % MOD;
    }
  }
}

const result = dp[N - 1].slice(1, 10).reduce((calc, cur) => {
  return calc + cur;
}, 0);
console.log(result % MOD);

/**
dp[3] = 32
dp[4] = 61
dp[5] = 116

console.log(dp);

const res = [];
function DFS(curIdx, visited) {
  console.log(process.memoryUsage());
  if (visited.length === N) {
    res.push(visited.join(""));
    return;
  }

  for (let i = 0; i < 10; i++) {
    if (Math.abs(Number(visited[curIdx]) - i) === 1) {
      visited.push(i);
      DFS(curIdx + 1, visited);
      visited.pop();
    }
  }
}

for (let i = 1; i < 10; i++) {
  DFS(0, [i]);
}
console.log(`LENGTH: ${res.length}:\n`, res);
 * 
 */
