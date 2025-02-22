const fs = require("fs");
const INPUT = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(INPUT[0]);

let result = ``;
for (let cur = 1; cur < N + 1; cur++) {
  const [sString, tString] = INPUT[cur].split(" ");
  const len = sString.length;

  for (let i = 0, j = len - 1; i <= j && j >= i; i++, j--) {
    const [forward, backward] = [sString[i], sString[j]];

    if (forward === "x" || forward === "X") {
      result = `${result}${tString[i].toUpperCase()}`;
      break;
    } else if (backward === "x" || backward === "X") {
      result = `${result}${tString[j].toUpperCase()}`;
      break;
    }
  }
}
console.log(result);
