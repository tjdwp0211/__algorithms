const { OTHERS, LOCAL } = { OTHERS: "/dev/stdin", LOCAL: `${__dirname}/input.txt` };
const fs = require("fs");

const DIR_ROW = [-1, 1, 0, 0];
const DIR_COL = [0, 0, -1, 1];

const [N, ...matrix] = fs
  .readFileSync(process.platform === "linux" ? OTHERS : LOCAL)
  .toString()
  .split("\n")
  .map((input, i) => (i === 0 ? Number(input) : input.split(" ").map(Number)));

let visited = Array.from({ length: N }, () => Array.from({ length: N }, () => 0));
let [sharkRow, sharkCol] = [0, 0];
let [sharkSize, eatCount] = [2, 0];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (matrix[i][j] === 9) {
      matrix[i][j] = 0;
      [sharkRow, sharkCol] = [i, j];
    }
  }
}

let [response, depth] = [0, -1];
while (true) {
  const eatableFishList = findEatableFish(sharkRow, sharkCol);

  if (eatableFishList.length === 0) {
    break;
  }
  const { distance, row, col } = eatableFishList.shift();

  matrix[row][col] = 0;
  [sharkRow, sharkCol] = [row, col];
  [response, eatCount] = [response + distance, eatCount + 1];
  visited = Array.from({ length: N }, () => Array.from({ length: N }, () => 0));
  depth = -1;
  if (eatCount === sharkSize) {
    [sharkSize, eatCount] = [sharkSize + 1, 0];
  }
  // console.log(`CUR: [${row}][${col}] | RES: ${response} | `);
  // console.log(`Lv. ${sharkSize} | EAT: ${eatCount}`);
}
console.log(response);

/**
 * ===========================================================
 */
function findEatableFish(defaultRow, defalutCol) {
  const eatableList = [];
  const queue = [{ row: defaultRow, col: defalutCol }];
  while (queue.length > 0) {
    depth += 1;
    const queueSize = queue.length;
    for (let _ = 0; _ < queueSize; _++) {
      const { row, col } = queue.shift();

      if (isCanEat(row, col)) {
        eatableList.push({ distance: depth, row, col });
      }

      for (let d = 0; d < 4; d++) {
        const nextRow = row + DIR_ROW[d];
        const nextCol = col + DIR_COL[d];

        if (isCanGo(nextRow, nextCol)) {
          queue.push({ row: nextRow, col: nextCol });
          visited[nextRow][nextCol] = 1;
        }
      }
    }
  }

  const sortedEatableList = eatableList.sort((a, b) => {
    if (a.distance !== b.distance) {
      return a.distance - b.distance;
    } else if (a.row !== b.row) {
      return a.row - b.row;
    } else {
      return a.col - b.col;
    }
  });

  return sortedEatableList;
}

function isCanGo(r, c) {
  if (r < 0 || r >= N || c < 0 || c >= N) {
    return false;
  }
  if (sharkSize < matrix[r][c] || visited[r][c] === 1) {
    return false;
  }
  return true;
}

function isCanEat(r, c) {
  return matrix[r][c] !== 0 && matrix[r][c] < sharkSize;
}
