const { OTHERS, LOCAL } = { OTHERS: "/dev/stdin", LOCAL: `${__dirname}/input.txt` };
const fs = require("fs");

const [N, M, ...edges] = fs
  .readFileSync(process.platform === "linux" ? OTHERS : LOCAL)
  .toString()
  .trim()
  .split("\n")
  .map((input, i) => (i > 1 ? input.split(" ").map(Number) : Number(input)));

const graph = Array.from({ length: N + 1 }, () => []);
const visited = Array.from({ length: N + 1 }, () => false);
visited[1] = true;

for (const [p1, p2] of edges) {
  graph[p1].push(p2);
  graph[p2].push(p1);
}

dfs(1, 0);

const count = visited.filter((v) => v === true).length - 1;
console.log(count);

function dfs(person, depth) {
  if (depth === 2) return;

  for (const nx of graph[person]) {
    if (!visited[nx]) {
      visited[nx] = true;
    }
    dfs(nx, depth + 1);
  }
}
