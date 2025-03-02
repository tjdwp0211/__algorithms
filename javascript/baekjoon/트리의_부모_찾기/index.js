const { OTHERS, LOCAL } = { OTHERS: "/dev/stdin", LOCAL: `${__dirname}/input.txt` };
const fs = require("fs");

const [N, ...edges] = fs
  .readFileSync(process.platform === "linux" ? OTHERS : LOCAL)
  .toString()
  .trim()
  .split("\n")
  .map((input, i) => (i === 0 ? Number(input) : input.split(" ").map(Number)));

const visited = Array.from({ length: N + 1 }, (_, i) => (i === 0 ? 0 : -i));
const graph = Array.from({ length: N + 1 }, () => []);
for (let [x, y] of edges) {
  graph[x].push(y);
  graph[y].push(x);
}

const queue = [1];
visited[1] = 1;
while (queue.length > 0) {
  const curNode = queue.shift();

  for (let nextNode of graph[curNode]) {
    if (visited[nextNode] > 0) continue;
    visited[nextNode] = curNode;
    queue.push(nextNode);
  }
}

for (let [i, parent] of visited.entries()) {
  if (i < 2) continue;
  console.log(parent);
}
