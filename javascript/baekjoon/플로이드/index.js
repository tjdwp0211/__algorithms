const DIR = { others: "/dev/stdin", local: `${__dirname}/input.txt` };
const fs = require("fs");

const [N, M, ...edges] = fs
  .readFileSync(process.platform === "linux" ? DIR.others : DIR.local)
  .toString()
  .split("\n")
  .map((input, i) => (i < 2 ? Number(input) : input.split(" ").map(Number)));

const matrix = Array.from({ length: N + 1 }, () => Array.from({ length: N + 1 }, () => Infinity));

for (let [from, to, cost] of edges) {
  matrix[from][to] = Math.min(cost, matrix[from][to]);
}

for (let mid = 1; mid < N + 1; mid++) {
  for (let start = 1; start < N + 1; start++) {
    for (let end = 1; end < N + 1; end++) {
      if (start === end) continue;
      matrix[start][end] = Math.min(matrix[start][end], matrix[start][mid] + matrix[mid][end]);
    }
  }
}

matrix.splice(0, 1);
for (let i = 0; i < N; i++) {
  matrix[i].splice(0, 1);
  for (let j = 0; j < N; j++) {
    if (matrix[i][j] === Infinity) {
      matrix[i][j] = 0;
    }
  }
}

for (let [i, el] of matrix.entries()) console.log(el.join(" "));
