const { OTHERS, LOCAL } = { OTHERS: "/dev/stdin", LOCAL: `${__dirname}/input.txt` };
const fs = require("fs");

const [FIRST_STR, SECOND_STR] = fs
  .readFileSync(process.platform === "linux" ? OTHERS : LOCAL)
  .toString()
  .split("\n");

/**
 * @@@@@@@@@@@@@@@@@@ 이하 정답 주의 @@@@@@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@@@@@ 이하 정답 주의 @@@@@@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@@@@@ 이하 정답 주의 @@@@@@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@@@@@ 이하 정답 주의 @@@@@@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@@@@@ 이하 정답 주의 @@@@@@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@@@@@ 이하 정답 주의 @@@@@@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@@@@@ 이하 정답 주의 @@@@@@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@@@@@ 이하 정답 주의 @@@@@@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@@@@@ 이하 정답 주의 @@@@@@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@@@@@ 이하 정답 주의 @@@@@@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@@@@@ 이하 정답 주의 @@@@@@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@@@@@ 이하 정답 주의 @@@@@@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@@@@@ 이하 정답 주의 @@@@@@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@@@@@ 이하 정답 주의 @@@@@@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@@@@@ 이하 정답 주의 @@@@@@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@@@@@ 이하 정답 주의 @@@@@@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@@@@@ 이하 정답 주의 @@@@@@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@@@@@ 이하 정답 주의 @@@@@@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@@@@@ 이하 정답 주의 @@@@@@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@@@@@ 이하 정답 주의 @@@@@@@@@@@@@@@@@@
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
const [FIRST_STR_LEN, SECOND_STR_LEN] = [FIRST_STR.length, SECOND_STR.length];
const memo = Array.from({ length: FIRST_STR_LEN + 1 }, () => Array.from({ length: SECOND_STR_LEN + 1 }, () => 0));

for (let i = 1; i < FIRST_STR_LEN + 1; i++) {
  for (let j = 1; j < SECOND_STR_LEN + 1; j++) {
    if (FIRST_STR[i - 1] === SECOND_STR[j - 1]) {
      memo[i][j] = memo[i - 1][j - 1] + 1;
    } else {
      memo[i][j] = Math.max(memo[i - 1][j], memo[i][j - 1]);
    }
  }
}

let [firstLen, secondLen] = [FIRST_STR_LEN, SECOND_STR_LEN];
let lcs = ``;
while (firstLen >= 1 && secondLen >= 1) {
  if (
    memo[firstLen][secondLen] > memo[firstLen - 1][secondLen] &&
    memo[firstLen - 1][secondLen] == memo[firstLen][secondLen - 1] &&
    memo[firstLen][secondLen - 1] == memo[firstLen - 1][secondLen - 1]
  ) {
    lcs = `${lcs}${SECOND_STR[secondLen - 1]}`;
    firstLen--;
    secondLen--;
  } else if (
    memo[firstLen][secondLen] == memo[firstLen - 1][secondLen] &&
    memo[firstLen - 1][secondLen] > memo[firstLen][secondLen - 1]
  ) {
    firstLen--;
  } else if (
    memo[firstLen - 1][secondLen] < memo[firstLen][secondLen - 1] &&
    memo[firstLen][secondLen - 1] == memo[firstLen][secondLen]
  ) {
    secondLen--;
  } else {
    secondLen--;
  }
}

if (memo[FIRST_STR_LEN][SECOND_STR_LEN]) {
  console.log(memo[FIRST_STR_LEN][SECOND_STR_LEN]);
  console.log([...lcs].reverse().join(""));
  // console.log(`${responseList.length}`, responseList.join(""));
} else {
  console.log(memo[FIRST_STR_LEN][SECOND_STR_LEN]);
}
