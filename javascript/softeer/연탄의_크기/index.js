const fs = require("fs");
const INPUT = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(INPUT[0]);
const items = INPUT[1].split(" ").map(Number);

let maxResult = -Infinity;
for (let i = 2; i < 101; i++) {
  let curResult = 0;
  for (let j = 0; j < N; j++) {
    if (items[j] % i === 0) {
      // console.log(`${item} % ${i} = ${item % i}`)
      curResult += 1;
    }
  }
  // console.log(`${i} = ${maxResult, curResult}`)
  maxResult = Math.max(maxResult, curResult);
}
console.log(maxResult);
