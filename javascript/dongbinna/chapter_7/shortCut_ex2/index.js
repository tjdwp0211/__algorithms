// 미래도시(START)에는 1~N 회사 있음.
// 특정 회사끼리 도로로 양방향 연결
// A는 K번 회사 방문 후, X번 회사를 가는 것이 목표
// 1 <= N(회사 수), M(간선 수) <= 100
// 1 <= K(경유지) <= 100
// 단, X번 회사로 도달할 수 없다면, -1 출력
// K => X
// 플로이드워셜

// 5 7
// 1 2
// 1 3
// 1 4
// 2 4
// 3 4
// 3 5
// 4 5
// 4 5

const DIRECTORY = "./javascript/dongbinna/chapter_7/shortCut_ex2/input.txt";
const fs = require("fs");

const INPUT = fs.readFileSync(DIRECTORY).toString().split("\n");

const [N, M] = INPUT[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }).map(() => []);
const distanceTable = Array.from({ length: N + 1 }).map(() =>
  Array.from({ length: N + 1 }).fill(Infinity)
);

for (let i = 1; i < M + 1; i++) {
  const [from, to] = INPUT[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
  [distanceTable[from][to], distanceTable[to][from]] = [1, 1];
}

const [X, K] = INPUT[M + 1].split(" ").map(Number);

for (let k = 1; k < N + 1; k++) {
  for (let a = 1; a < N + 1; a++) {
    for (let b = 1; b < N + 1; b++) {
      distanceTable[a][b] = Math.min(
        distanceTable[a][b],
        distanceTable[a][k] + distanceTable[k][b]
      );
    }
  }
  // for (let d of distanceTable) console.log(d);
  // console.log();
}
console.log(distanceTable[1][K] + distanceTable[K][X]);
