const fs = require("fs");
const INPUT = fs.readFileSync("input.txt").toString().split("\n");

const MAPS_1 = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];
const MAPS_2 = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 0, 1],
];

const MAPS_3 = [[1], [1]];

const MAPS_4 = [[1], [0], [1]];

const N_VECTOR = [0, 0, 1, -1];
const M_VECTOR = [1, -1, 0, 0];
let result = 10_001;

function printArray({ arr, prefix }) {
  for (el of arr) {
    console.log(`${prefix}`, el);
  }
  console.log();
}

function isEndPointBlocked({ n, m }) {
  for (let i = 0; i < 4; i++) {
    let next_n = n + N_VECTOR[i];
    let next_m = m + M_VECTOR[i];

    const isInMap =
      validateIndex({ index: next_n, end: visited.length }) &&
      validateIndex({ index: next_m, end: visited[0].length });

    if (isInMap && maps[next_n][next_m]) {
      return true;
    }
  }
  return false;
}

function validateIndex({ index, end }) {
  return 0 <= index && index < end;
}

function DFS({ n, m, depth, visited, maps }) {
  printArray({ arr: visited, prefix: `${depth}:` });
  // if (depth > result || (n === 0 && m === 0)) {
  //   result = Math.min(result, depth + 1);
  //   return;
  // }

  if (n === 0 && m === 0) {
    result = Math.min(result, depth + 1);
    return;
  }

  for (let i = 0; i < 4; i++) {
    let next_n = n + N_VECTOR[i];
    let next_m = m + M_VECTOR[i];

    const isInMap =
      validateIndex({ index: next_n, end: visited.length }) &&
      validateIndex({ index: next_m, end: visited[0].length });

    if (isInMap && maps[next_n][next_m] && !visited[next_n][next_m]) {
      visited[n][m] = 1;
      DFS({ n: next_n, m: next_m, depth: depth + 1, visited, maps });
      visited[n][m] = 0;
    }
  }
}

function solution(maps) {
  const N = maps.length;
  const M = maps[0].length;

  const visited = Array.from({ length: N }).map(() =>
    Array.from({ length: M }).fill(0)
  );

  DFS({ n: N - 1, m: M - 1, depth: 0, visited, maps });

  return result === 10_001 ? -1 : result;
}

console.log(solution(MAPS_1));
