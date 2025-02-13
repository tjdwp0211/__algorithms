const DIR = {
  local: `${__dirname}/input.txt`,
  others: "/dev/stdin",
};

const fs = require("fs");
const INPUT = fs
  .readFileSync(process.platform === "linux" ? DIR.others : DIR.local)
  .toString();

const N = Number(INPUT);
const queens = [];

let response = 0;
function DFS(row) {
  if (row === N) response += 1;

  for (let col = 0; col < N; col++) {
    if (isEnablePlace(row, col)) {
      queens.push([row, col]);
      DFS(row + 1);
      queens.pop();
    }
  }
}

function isEnablePlace(row, col) {
  for (let [otherRow, otherCol] of queens) {
    if (otherRow === row || otherCol === col) return false;
    if (Math.abs(otherRow - row) === Math.abs(otherCol - col)) return false;
  }
  return true;
}

DFS(0);
console.log(response);

/**
 * 시간 초과 풀이

N*N에 N개의 Queen을 놓아야 하니 좌표를 고르고 가능한 곳인지 확인 후 백트래킹


visited를 Array로 관리해서 시간 초과가 났음.
-> visited를 Set으로 관리해서 시간 초과가 났음.
-> 연산 자체가 많은가?
-> 위 코드로 짬.

-> 위 코드랑 비교했을 때, 아래 코드가 재귀 깊이는 똑같을 거 같지만, 연산이 많을 거 같긴 함.

const visitedRow = new Set();
const visitedCol = new Set();
const visitedDiagonal1 = new Set();
const visitedDiagonal2 = new Set();

let response = 0;
function DFS(n, r, start, depth) {
  if (depth === r) {
    response += 1;
    return;
  }

  for (let i = start; i < n; i++) {
    const col = i % N;
    const row = Math.floor((i - col) / N);
    const [diagonal1, diagonal2] = [row - col, row + col];

    if (isEnablePlace(row, col, diagonal1, diagonal2)) {
      visitedRow.add(row);
      visitedCol.add(col);
      visitedDiagonal1.add(diagonal1);
      visitedDiagonal2.add(diagonal2);
      DFS(n, r, i, depth + 1);
      visitedRow.delete(row);
      visitedCol.delete(col);
      visitedDiagonal1.delete(diagonal1);
      visitedDiagonal2.delete(diagonal2);
    }
  }
}

function isEnablePlace(row, col, diagonal1, diagonal2) {
  if (visitedRow.has(row)) return false;
  if (visitedCol.has(col)) return false;
  if (visitedDiagonal1.has(diagonal1)) return false;
  if (visitedDiagonal2.has(diagonal2)) return false;
  return true;
}

DFS(N * N, N, 0, 0);
console.log(response);

 */
