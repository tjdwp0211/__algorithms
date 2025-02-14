class Queue {
  constructor() {
    this.items = [];
    this.head = 0;
    this.tail = 0;
  }

  size() {
    return this.tail - this.head;
  }

  push(value) {
    this.items.push(value);
    this.tail += 1;
  }

  pop() {
    if (this.size() === 0) return null;
    const popped = this.items[this.head];
    this.head += 1;
    return popped;
  }

  front() {
    if (this.size() === 0) return null;
    return this.items[this.head];
  }
}

const DIR = { others: "/dev/stdin", local: `${__dirname}/input.txt` };

const fs = require("fs");
const INPUT = fs
  .readFileSync(process.platform === "linux" ? DIR.others : DIR.local)
  .toString()
  .split("\n");

const R_VECTOR = [-1, 1, 0, 0];
const C_VECTOR = [0, 0, -1, 1];

const [ROW, COL] = INPUT[0].split(" ").map(Number);
const [ZERO_BASED_ROW, ZERO_BASED_COL] = [ROW - 1, COL - 1];

const room = INPUT.slice(1, ROW + 1).map((input) => input.split("").map(Number));

function BFS(visited, countMemo) {
  const queue = new Queue();
  queue.push({ row: 0, col: 0, breakWallCount: 0 });
  visited[0][0][0] = true;
  visited[0][0][1] = true;
  countMemo[0][0] = 1;

  while (queue.size() > 0) {
    const { row, col, breakWallCount } = queue.pop();

    if (row === ZERO_BASED_ROW && col === ZERO_BASED_COL) {
      return countMemo[ZERO_BASED_ROW][ZERO_BASED_COL];
    }

    for (let d = 0; d < 4; d++) {
      const nextRow = row + R_VECTOR[d];
      const nextCol = col + C_VECTOR[d];

      if (isOutOfIndex(nextRow, nextCol)) continue;

      if (breakWallCount === 0 && room[nextRow][nextCol] === 1 && !visited[nextRow][nextCol][1]) {
        visited[nextRow][nextCol][1] = true;
        countMemo[nextRow][nextCol] = countMemo[row][col] + 1;

        queue.push({ row: nextRow, col: nextCol, breakWallCount: 1 });
      }

      if (room[nextRow][nextCol] === 0 && !visited[nextRow][nextCol][breakWallCount]) {
        visited[nextRow][nextCol][breakWallCount] = true;
        countMemo[nextRow][nextCol] = countMemo[row][col] + 1;

        queue.push({ row: nextRow, col: nextCol, breakWallCount: breakWallCount });
      }
    }
  }

  return -1;
}

const visited = Array.from({ length: ROW }, () => Array.from({ length: COL }).map(() => [false, false]));
const countMemo = Array.from({ length: ROW }, () => Array.from({ length: COL }).map(() => 0));
console.log(BFS(visited, countMemo));

function isOutOfIndex(row, col) {
  return row < 0 || ROW <= row || col < 0 || COL <= col;
}
