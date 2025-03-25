const { OTHERS, LOCAL } = { OTHERS: "/dev/stdin", LOCAL: `${__dirname}/input.txt` };
const fs = require("fs");

class Node {
  constructor(row, col, height) {
    this.row = row;
    this.col = col;
    this.height = height;
  }
}
class MaxHeap {
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
      let maxIndex = head;
      const [left, right] = [2 * head + 1, 2 * head + 2];

      if (left < this.size() && this.items[maxIndex].height < this.items[left].height) {
        maxIndex = left;
      }

      if (right < this.size() && this.items[maxIndex].height < this.items[right].height) {
        maxIndex = right;
      }

      if (maxIndex !== head) {
        this.swap(maxIndex, head);
        head = maxIndex;
      } else {
        break;
      }
    }
  }

  heapifyUp(tail) {
    while (Math.floor((tail - 1) / 2) >= 0) {
      const parents = Math.floor((tail - 1) / 2);
      if (this.items[parents].height < this.items[tail].height) {
        this.swap(parents, tail);
        tail = parents;
      } else {
        break;
      }
    }
  }

  heapPush(node) {
    if (this.size() === 0) {
      this.items.push(node);
      return node;
    }

    this.items.push(node);
    this.heapifyUp(this.size() - 1);
    return node;
  }

  heapPop() {
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

const DIR_ROW = [-1, 1, 0, 0];
const DIR_COL = [0, 0, -1, 1];

const [[ROW, COL], ...matrix] = fs
  .readFileSync(process.platform == "linux" ? OTHERS : LOCAL)
  .toString()
  .trim()
  .split("\n")
  .map((input) => input.split(" ").map(Number));

const pq = new MaxHeap();
const dp = Array.from({ length: ROW }, () => Array.from({ length: COL }, () => 0));
dp[0][0] = 1;
pq.heapPush(new Node(0, 0, matrix[0][0]));

while (!pq.isEmpty()) {
  const { row, col, height } = pq.heapPop();

  for (let d = 0; d < 4; d++) {
    const [nextRow, nextCol] = [row + DIR_ROW[d], col + DIR_COL[d]];
    if (isNotInBound(nextRow, nextCol)) {
      continue;
    }

    if (isCanGo(height, matrix[nextRow][nextCol])) {
      if (isNotVisited(nextRow, nextCol)) {
        pq.heapPush(new Node(nextRow, nextCol, matrix[nextRow][nextCol]));
      }
      dp[nextRow][nextCol] += dp[row][col];
    }
  }
}

console.log(dp[ROW - 1][COL - 1]);

function isNotInBound(row, col) {
  return row < 0 || ROW <= row || col < 0 || COL <= col;
}

function isCanGo(curHeight, nextHeight) {
  return nextHeight < curHeight;
}

function isNotVisited(row, col) {
  return dp[row][col] === 0;
}

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
 */
/** ================================= START: CLASS 선언부 ================================= */

// class Node {
//   constructor(row, col, height) {
//     this.row = row;
//     this.col = col;
//     this.height = height;
//   }
// }

// class MaxHeap {
//   constructor() {
//     this.items = [];
//   }

//   size() {
//     return this.items.length;
//   }

//   isEmpty() {
//     return this.size() === 0;
//   }

//   swap(x, y) {
//     [this.items[x], this.items[y]] = [this.items[y], this.items[x]];
//   }

//   heapifyDown(head) {
//     while (true) {
//       let maxIndex = head;
//       const left = 2 * head + 1;
//       const right = 2 * head + 2;

//       if (left < this.size() && this.items[left].height > this.items[maxIndex].height) {
//         maxIndex = left;
//       }
//       if (right < this.size() && this.items[right].height > this.items[maxIndex].height) {
//         maxIndex = right;
//       }

//       if (maxIndex === head) break;
//       this.swap(head, maxIndex);
//       head = maxIndex;
//     }
//   }

//   heapifyUp(tail) {
//     while (Math.floor((tail - 1) / 2) >= 0) {
//       const parents = Math.floor((tail - 1) / 2);
//       if (this.items[parents].height < this.items[tail].height) {
//         this.swap(tail, parents);
//         tail = parents;
//       } else {
//         break;
//       }
//     }
//   }

//   heapPush(node) {
//     if (this.size() === 0) {
//       this.items.push(node);
//       return node;
//     }

//     this.items.push(node);
//     this.heapifyUp(this.size() - 1);
//     return node;
//   }

//   heapPop() {
//     if (this.isEmpty()) {
//       return null;
//     }

//     if (this.size() === 1) {
//       return this.items.pop();
//     }

//     const popped = this.items[0];
//     this.items[0] = this.items.pop();
//     this.heapifyDown(0);
//     return popped;
//   }
// }
// /** ================================= END: CLASS 선언부 ================================= */

// const pq = new MaxHeap();
// const dp = Array.from({ length: ROW }, () => Array.from({ length: COL }, () => 0));

// pq.heapPush(new Node(0, 0, matrix[0][0]));
// dp[0][0] = 1;

// while (!pq.isEmpty()) {
//   const cur = pq.heapPop();

//   for (let d = 0; d < 4; d++) {
//     const [nextRow, nextCol] = [cur.row + DIR_ROW[d], cur.col + DIR_COL[d]];

//     if (outOfIndex(nextRow, nextCol)) {
//       continue;
//     }

//     if (canGo(cur.height, matrix[nextRow][nextCol])) {
//       if (isNotVisited(nextRow, nextCol)) {
//         pq.heapPush(new Node(nextRow, nextCol, matrix[nextRow][nextCol]));
//       }
//       dp[nextRow][nextCol] += dp[cur.row][cur.col];
//     }
//   }
// }
// console.log(dp[ROW - 1][COL - 1]);

// function outOfIndex(row, col) {
//   return row < 0 || ROW <= row || col < 0 || COL <= col;
// }

// function isNotVisited(row, col) {
//   return dp[row][col] === 0;
// }

// function canGo(cur, next) {
//   return next < cur;
// }
