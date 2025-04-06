class Node {
  constructor({ row, col, value }) {
    this.row = row;
    this.col = col;
    this.value = value;
  }
}

class MinHeap {
  constructor() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }

  heapifyDown(head) {
    while (true) {
      let minIndex = head;
      const [left, right] = [2 * head + 1, 2 * head + 2];

      if (left < this.size() && this.items[left].value < this.items[minIndex].value) {
        minIndex = left;
      }

      if (right < this.size() && this.items[right].value < this.items[minIndex].value) {
        minIndex = right;
      }

      if (minIndex !== head) {
        this.swap(minIndex, head);
        head = minIndex;
      } else {
        break;
      }
    }
  }

  heapifyUp(tail) {
    while (Math.floor((tail - 1) / 2) >= 0) {
      const parents = Math.floor((tail - 1) / 2);
      if (this.items[tail].value < this.items[parents].value) {
        this.swap(tail, parents);
        tail = parents;
      } else {
        break;
      }
    }
  }

  heappush(value) {
    if (this.size() === 0) {
      this.items.push(value);
      return value;
    }

    this.items.push(value);
    this.heapifyUp(this.size() - 1);
    return value;
  }

  heappop() {
    if (this.size() === 0) {
      return null;
    }

    if (this.size() === 1) {
      return this.items.pop();
    }

    const popped = this.items[0];
    this.items[0] = this.items.pop();
    this.heapifyDown(0);
    return popped;
  }
}

const { OTHERS, LOCAL } = { OTHERS: "/dev/stdin", LOCAL: `${__dirname}/input.txt` };
const fs = require("fs");

const DIR_ROW = [-1, 1, 0, 0];
const DIR_COL = [0, 0, -1, 1];

const INPUT = fs
  .readFileSync(process.platform === "linux" ? OTHERS : LOCAL)
  .toString()
  .split("\n");

let testCaseNumber = 1;
while (true) {
  const N = Number(INPUT.splice(0, 1));
  const matrix = [];

  if (N === 0) break;
  for (let i = 0; i < N; i++) {
    matrix.push(INPUT.splice(0, 1)[0].split(" ").map(Number));
  }

  const pq = new MinHeap();
  const distance = Array.from({ length: N }, () => Array.from({ length: N }, () => Infinity));

  pq.heappush(new Node({ row: 0, col: 0, value: matrix[0][0] }));
  while (!pq.isEmpty()) {
    const { row, col, value } = pq.heappop();
    distance[row][col] = Math.min(distance[row][col], value);

    if (row === N - 1 && col === N - 1) {
      break;
    }

    for (let d = 0; d < 4; d++) {
      const [nextRow, nextCol] = [row + DIR_ROW[d], col + DIR_COL[d]];
      if (nextRow < 0 || N <= nextRow || nextCol < 0 || N <= nextCol) continue;

      if (distance[nextRow][nextCol] === Infinity) {
        pq.heappush(new Node({ row: nextRow, col: nextCol, value: distance[row][col] + matrix[nextRow][nextCol] }));
      }
    }
  }

  console.log(`Problem ${testCaseNumber}: ${distance[N - 1][N - 1]}`);
  testCaseNumber += 1;
}
