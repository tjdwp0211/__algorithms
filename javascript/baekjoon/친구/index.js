const DIR = { others: "/dev/stdin", local: `${__dirname}/input.txt` };

const fs = require("fs");
const INPUT = fs
  .readFileSync(process.platform === "linux" ? DIR.others : DIR.local)
  .toString()
  .split("\n");

const N = Number(INPUT[0]);
const matrix = INPUT.slice(1, N + 1).map((input) => [...input]);
const graph = Array.from({ length: N }, () => []);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (i < j) continue;
    if (matrix[i][j] === "Y") {
      graph[i].push(j);
      graph[j].push(i);
    }
  }
}

const firends = Array.from({ length: N }, () => new Set());
for (let i = 0; i < N; i++) {
  for (let iFriends of graph[i]) {
    firends[i].add(iFriends);
    for (let secondFirends of graph[iFriends]) {
      if (i === secondFirends) continue;
      firends[i].add(secondFirends);
    }
  }
}

let maxSize = -Infinity;
for (let node of firends) {
  if (maxSize < node.size) maxSize = node.size;
}

console.log(maxSize);
