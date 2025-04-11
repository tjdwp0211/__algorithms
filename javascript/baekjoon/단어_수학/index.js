const { OTHERS, LOCAL } = { OTHERS: "/dev/stdin", LOCAL: `${__dirname}/input.txt` };
const fs = require("fs");

const [N, ...alphabetsList] = fs
  .readFileSync(process.platform === "linux" ? OTHERS : LOCAL)
  .toString()
  .trim()
  .split("\n")
  .map((input, i) => (i === 0 ? Number(input) : [...input]));

const alphabets = {};

for (let str of alphabetsList) {
  const maxDigit = str.length - 1;
  for (let [i, a] of str.entries()) {
    if (!alphabets[a]) alphabets[a] = 0;
    alphabets[a] += 10 ** (maxDigit - i);
  }
}

const sortedValues = Object.values(alphabets).sort((a, b) => b - a);
let response = 0;
for (let [i, value] of sortedValues.entries()) {
  response += value * (9 - i);
}

console.log(response);
