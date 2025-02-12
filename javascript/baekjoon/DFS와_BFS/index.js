const DIRECTORY = "./javascript/baekjoon/DFS와_BFS/input.txt";
const BAEKJOON_DIRECTORY = "/dev/stdin";
const fs = require("fs");

const INPUT = fs.readFileSync(DIRECTORY).toString().split("\n");

const [N, M, V] = INPUT[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
INPUT.slice(1, M + 1).forEach((input) => {
  const [node1, node2] = input.split(" ").map(Number);
  graph[node2].push(node1);
  graph[node1].push(node2);
});

for (let i = 1; i < N + 1; i++) {
  graph[i].sort((a, b) => a - b);
}

function BFS(start, visited) {
  const q = [start];

  while (q.length) {
    const curNode = q.shift();

    if (visited.includes(curNode)) continue;

    visited.push(curNode);
    for (let j = 0; j < graph[curNode].length; j++) {
      const nextNode = graph[curNode][j];
      if (!visited.includes(nextNode)) {
        q.push(nextNode);
      }
    }
  }
  return visited;
}

function DFS(curNode, depth, visited) {
  visited.push(curNode);

  if (visited.length === N) {
    return visited;
  }

  for (let i = 0; i < graph[curNode].length; i++) {
    const nextNode = graph[curNode][i];
    if (!visited.includes(nextNode)) {
      DFS(nextNode, depth + 1, visited);
    }
  }

  return visited;
}

const dfsPath = DFS(V, 0, []);
const bfsPath = BFS(V, []);

console.log(dfsPath.join(" "));
console.log(bfsPath.join(" "));
