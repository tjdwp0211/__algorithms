const fs = require("fs");

const DIR = {
  local: "./javascript/baekjoon/가장_긴_증가하는_부분_수열/input.txt",
  others: "/dev/stdin",
};

const INPUT = fs.readFileSync(DIR.local).toString().split("\n");

const N = Number(INPUT[0]);
const sequence = INPUT[1].split(" ").map(Number);
const dpTable = Array.from({ length: N }, () => 1);
dpTable[0] = 1;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (sequence[i] > sequence[j]) {
      dpTable[i] = Math.max(dpTable[i], dpTable[j] + 1);
    }
  }
}
console.log(dpTable);
console.log(Math.max(...dpTable));
