const DIR = { others: "/dev/stdin", local: `${__dirname}/input.txt` };
const fs = require("fs");

const [TEST_CASE, ...INPUT] = fs
  .readFileSync(process.platform === "linux" ? DIR.others : DIR.local)
  .toString()
  .split("\n")
  .map((input) => input.split(" ").map(Number));

for (let tc = 0; tc < TEST_CASE; tc++) {
  const [N, K] = INPUT.splice(0, 1)[0];
  const weightList = INPUT.splice(0, 1)[0];
  const xyList = INPUT.splice(0, K);
  const W = INPUT.splice(0, 1)[0][0];

  const queue = [];
  const graph = Array.from({ length: N + 1 }, () => []);
  const memo = Array.from({ length: N + 1 }, () => 0);
  const indegreeList = Array.from({ length: N + 1 }, () => 0);

  for (let [x, y] of xyList) {
    graph[x].push(y);
    indegreeList[y] += 1;
  }

  for (let i = 1; i < N + 1; i++) {
    if (indegreeList[i] === 0) {
      memo[i] = weightList[i - 1];
      queue.push({ node: i, weight: weightList[i - 1] });
      queue.sort((x, y) => y.weight - x.weight);
    }
  }

  while (queue.length > 0) {
    const { node: curNode, weight: curWeight } = queue.shift();

    if (curNode === W) {
      break;
    }

    for (let next of graph[curNode]) {
      indegreeList[next] -= 1;

      memo[next] = Math.max(memo[next], memo[curNode] + weightList[next - 1]);
      if (indegreeList[next] === 0) {
        queue.push({ node: next, weight: memo[next] });
        queue.sort((x, y) => y.weight - x.weight);
      }
    }
  }
  console.log(memo[W]);
}
