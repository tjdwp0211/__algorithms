const fs = require("fs");
const INPUT = fs.readFileSync("input.txt").toString().split("\n");

class Queue {
  constructor() {
    this.items = [];
  }

  [Symbol.iterator] = function* () {
    for (item of this.items) {
      yield item;
    }
  };

  len() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  pushBack(value) {
    this.items.push(value);
  }

  popFront() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  head() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  tail() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.at(-1);
  }
}

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
// let result = 10_001;

function printArray({ arr, prefix }) {
  for (el of arr) {
    console.log(`${prefix}`, el);
  }
  console.log();
}

function validateIndex({ index, end }) {
  return 0 <= index && index < end;
}

function BFS({ n, m, visited, maps }) {
  const q = new Queue();
  q.pushBack([n, m]);
  visited[n][m] = 1;

  while (q.len() > 0) {
    const [cur_n, cur_m] = q.popFront();

    for (let i = 0; i < 4; i++) {
      const next_n = cur_n + N_VECTOR[i];
      const next_m = cur_m + M_VECTOR[i];

      const isInMap =
        validateIndex({ index: next_n, end: maps.length }) &&
        validateIndex({ index: next_m, end: maps[0].length });

      if (isInMap && maps[next_n][next_m] && !visited[next_n][next_m]) {
        q.pushBack([next_n, next_m]);
        visited[next_n][next_m] = visited[cur_n][cur_m] + 1;
      }
    }
  }
  return visited;
}

function solution(maps) {
  const N = maps.length;
  const M = maps[0].length;

  const visited = Array.from({ length: N }).map(() =>
    Array.from({ length: M }).fill(0)
  );

  const visitedMaps = BFS({ n: N - 1, m: M - 1, visited, maps });

  return visitedMaps[0][0] ? visited[0][0] : -1;
}

console.log(solution(MAPS_2));
