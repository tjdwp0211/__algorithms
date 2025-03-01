const DIR = { others: "/dev/stdin", local: `${__dirname}/input.txt` };
const fs = require("fs");

const [TEST_CASE, ...INPUT] = fs
  .readFileSync(process.platform === "linux" ? DIR.others : DIR.local)
  .toString()
  .split("\n")
  .map((input) => input.split(" ").map(Number));

for (let tc = 0; tc < TEST_CASE; tc++) {
  const [N, K] = INPUT.splice(0, 1)[0];
  const delayList = INPUT.splice(0, 1)[0];
  const xyList = INPUT.splice(0, K);
  const W = INPUT.splice(0, 1)[0][0];

  const graph = Array.from({ length: N + 1 }, () => []);
  const indegreeCountList = Array.from({ length: N + 1 }, () => 0);
  const memoDelay = Array.from({ length: N + 1 }, () => 0);
  const queue = [];

  for (let [from, to] of xyList) {
    graph[from].push(to);
    indegreeCountList[to] += 1;
  }

  for (let node = 1; node < N + 1; node++) {
    if (indegreeCountList[node] === 0) {
      queue.push({ compare: delayList[node - 1], node });
      queue.sort((a, b) => b.compare - a.compare);
      memoDelay[node] = delayList[node - 1];
    }
  }

  while (queue.length > 0) {
    const { node: curNode } = queue.shift();

    if (curNode === W) {
      break;
    }

    for (let nextNode of graph[curNode]) {
      indegreeCountList[nextNode] -= 1;
      memoDelay[nextNode] = Math.max(memoDelay[nextNode], memoDelay[curNode] + delayList[nextNode - 1]);
      // console.log("CURR:", curNode, "| NEXT:", nextNode);
      // console.log("MEMO:", memoDelay);
      // console.log("INDE:", indegreeCountList);
      // console.log();
      if (indegreeCountList[nextNode] === 0) {
        queue.push({ node: nextNode, compare: memoDelay[nextNode] });
        queue.sort((a, b) => b.compare - a.compare);
      }
    }
  }
  console.log(memoDelay[W]);
}

/**
 * @@@@@@@@@@@@@@ 이하 정답 주의 @@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@ 이하 정답 주의 @@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@ 이하 정답 주의 @@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@ 이하 정답 주의 @@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@ 이하 정답 주의 @@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@ 이하 정답 주의 @@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@ 이하 정답 주의 @@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@ 이하 정답 주의 @@@@@@@@@@@@@@
 * @@@@@@@@@@@@@@ 이하 정답 주의 @@@@@@@@@@@@@@
 */

/** 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
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

 */
