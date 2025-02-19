const DIR = { others: "/dev/stdin", local: `${__dirname}/input.txt` };

const fs = require("fs");
const [str1, str2] = fs
  .readFileSync(process.platform === "linux" ? DIR.others : DIR.local)
  .toString()
  .split("\n")
  .map((input) => [...input]);

const [STR_1_LEN, STR_2_LEN] = [str1.length, str2.length];
const dp = Array.from({ length: STR_1_LEN + 1 }, () => Array.from({ length: STR_2_LEN + 1 }, () => 0));

for (let i = 1; i < STR_1_LEN + 1; i++) {
  for (let j = 1; j < STR_2_LEN + 1; j++) {
    if (str1[i - 1] !== str2[j - 1]) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    } else {
      // 정답 코드
      dp[i][j] = dp[i - 1][j - 1] + 1;

      // 틀린 코드
      // dp[i][j] = Math.max(dp[i - 1][j] + 1, dp[i][j - 1] + 1)
    }
  }
}
for (let d of dp) console.log(`${d}`);
console.log(dp[STR_1_LEN][STR_2_LEN]);
