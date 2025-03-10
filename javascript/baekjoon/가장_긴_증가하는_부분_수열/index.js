const { OTHERS, LOCAL } = { LOCAL: `${__dirname}/input.txt`, OTHERS: "/dev/stdin" };
const fs = require("fs");

const [N, sequence] = fs
  .readFileSync(process.platform === "linux" ? OTHERS : LOCAL)
  .toString()
  .split("\n")
  .map((input, i) => (i === 0 ? Number(input) : input.split(" ").map(Number)));

/** ===============OTHER=============== */
const dp = Array.from({ length: N }, () => 1);
for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (sequence[j] < sequence[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}
console.log(Math.max(...dp));
/** ===============OTHER=============== */
/**
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
 *
 *
 *
 *
 *
 *
 *
 *  ===============ORIGIN=============== */
// const dpTable = Array.from({ length: N }, () => 1);
// dpTable[0] = 1;

// for (let i = 0; i < N; i++) {
//   for (let j = 0; j < i; j++) {
//     if (sequence[i] > sequence[j]) {
//       dpTable[i] = Math.max(dpTable[i], dpTable[j] + 1);
//     }
//   }
// }
// console.log("ORIGIN:", dpTable);
// console.log("ORIGIN:", Math.max(...dpTable));
/** ===============ORIGIN=============== */
