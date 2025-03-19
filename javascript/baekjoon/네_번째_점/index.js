const { OTHERS, LOCAL } = { OTHERS: "/dev/stdin", LOCAL: `${__dirname}/input.txt` };
const fs = require("fs");

const [[x1, y1], [x2, y2], [x3, y3]] = fs
  .readFileSync(process.platform === "linux" ? OTHERS : LOCAL)
  .toString()
  .split("\n")
  .map((input) => input.split(" ").map(Number));

console.log(findRemainDot(x1, x2, x3), findRemainDot(y1, y2, y3));

function findRemainDot(dot1, dot2, dot3) {
  let dot = 0;

  if (dot1 === dot2) {
    dot = dot3;
  } else if (dot1 === dot3) {
    dot = dot2;
  } else {
    dot = dot1;
  }

  return dot;
}
