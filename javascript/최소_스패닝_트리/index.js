const DIR = { others: "/dev/stdin", local: `${__dirname}/input.txt` };
const fs = require("fs");

const [[N, E], ...inputEdges] = fs
  .readFileSync(process.platform === "linux" ? DIR.others : DIR.local)
  .toString()
  .split("\n")
  .map((input) => input.split(" ").map(Number));

const edges = [];
for (let [node1, node2, weight] of inputEdges) edges.push({ node1, node2, weight });
edges.sort((a, b) => a.weight - b.weight);

const parents = Array.from({ length: N + 1 }, (_, i) => i);
const ranks = Array.from({ length: N + 1 }, () => 0);

function findRoot(x) {
  if (parents[x] !== parents[parents[x]]) return (parents[x] = findRoot(parents[x]));
  return parents[x];
}

let [response, edgeCount] = [0, 0];
for (let { node1, node2, weight } of edges) {
  if (edgeCount === N - 1) break;
  if (union(node1, node2)) continue;

  response += weight;
  edgeCount += 1;
}
console.log(response);

function union(x, y) {
  const rootX = findRoot(x);
  const rootY = findRoot(y);

  if (rootX !== rootY) {
    if (ranks[rootX] > ranks[rootY]) {
      parents[rootY] = rootX;
    } else if (ranks[rootX] < ranks[rootY]) {
      parents[rootX] = rootY;
    } else {
      parents[rootY] = rootX;
      ranks[rootX] += 1;
    }
    return false;
  }
  return true;
}
