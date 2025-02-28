const { OTHERS, LOCAL } = { OTHERS: "/dev/stdin", LOCAL: `${__dirname}/input.txt` };
const fs = require("fs");

const [[N, M], ...edges] = fs
  .readFileSync(process.platform === "linux" ? OTHERS : LOCAL)
  .toString()
  .split("\n")
  .map((input) => input.split(" ").map(Number));

const distance = Array.from({ length: N + 1 }, () => Infinity);

function bellmanFord(start) {
  distance[start] = 0;

  for (let i = 0; i < N; i++) {
    for (const [from, to, cost] of edges) {
      if (distance[from] !== Infinity && distance[to] > distance[from] + cost) {
        distance[to] = distance[from] + cost;

        if (i === N - 1) {
          return true;
        }
      }
    }
  }
  return false;
}

if (bellmanFord(1)) {
  console.log(-1);
} else {
  for (let i = 2; i <= N; i++) {
    if (distance[i] === Infinity) {
      console.log(-1);
    } else {
      console.log(distance[i]);
    }
  }
}
