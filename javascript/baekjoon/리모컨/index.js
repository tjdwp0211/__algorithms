const DIR = { others: "/dev/stdin", local: `${__dirname}/input.txt` };
const fs = require("fs");
const INPUT = fs
  .readFileSync(process.platform === "linux" ? DIR.others : DIR.local)
  .toString()
  .split("\n");

const N = Number(INPUT[0]);
const M = Number(INPUT[1]);
const brokenButtons = M === 0 ? [] : INPUT[2].split(" ").map(Number);
const workingButtons = Array.from({ length: 10 }, (_, i) => i).filter((el) => !brokenButtons.includes(el));
const nLength = String(N).length;

let channle = 100;
let count = Math.abs(N - 100);

for (let curChannle = 0; curChannle < 1_000_000; curChannle++) {
  const numString = String(curChannle);

  let isValidateNumber = true;
  for (let i = 0; i < numString.length; i++) {
    if (brokenButtons.includes(Number(numString[i]))) {
      isValidateNumber = false;
      break;
    }
  }

  if (isValidateNumber) {
    const curCount = Math.abs(N - curChannle) + numString.length;

    if (curCount < count) {
      [channle, count] = [curChannle, curCount];
    }
  }
}

console.log(count);
