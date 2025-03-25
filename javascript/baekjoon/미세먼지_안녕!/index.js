const { OTHERS, LOCAL } = { OTHERS: "/dev/stdin", LOCAL: `${__dirname}/input.txt` };
const fs = require("fs");

const DIR_ROW = [-1, 0, 1, 0];
const DIR_COL = [0, 1, 0, -1];

let [[ROW, COL, TIME], ...matrix] = fs
  .readFileSync(process.platform === "linux" ? OTHERS : LOCAL)
  .toString()
  .trim()
  .split("\n")
  .map((input) => input.split(" ").map(Number));

let [top, bot] = [0, 0];
for (let r = 0; r < ROW; r++) {
  if (matrix[r][0] === -1) {
    [top, bot] = [r, r + 1];
    break;
  }
}

/** ================================== MAIN ================================== */
while (TIME > 0) {
  matrix = workCleaner(spreadDust(matrix));
  TIME -= 1;
}

let response = 2;
for (let r = 0; r < ROW; r++) {
  response += matrix[r].reduce((acc, cur, i) => {
    return (acc += cur);
  }, 0);
}
console.log(response);
/** ================================== MAIN ================================== */

/** ================================== UTIL FUNCTION ================================== */
function spreadDust(curMatrix) {
  const copiedMatrix = copyMatrix(curMatrix);

  for (let r = 0; r < ROW; r++) {
    for (let c = 0; c < COL; c++) {
      if ((r === top && c === 0) || (r === bot && c === 0)) continue;

      let spreadCount = 0;
      const calced = Math.floor(curMatrix[r][c] / 5);

      for (let d = 0; d < 4; d++) {
        const [nr, nc] = [r + DIR_ROW[d], c + DIR_COL[d]];
        if (isNotInBound(nr, nc) || copiedMatrix[nr][nc] === -1) continue;

        spreadCount += 1;
        copiedMatrix[nr][nc] += calced;
      }
      remainDust(r, c, calced, spreadCount, copiedMatrix);
    }
  }
  return copiedMatrix;
}

function remainDust(row, col, calced, count, copied) {
  copied[row][col] = copied[row][col] - calced * count;
}

function workCleaner(curMatrix) {
  let tmpTop = 0;

  // -->
  for (let c = 1; c < COL - 1; c++) {
    [curMatrix[top][c], tmpTop] = [tmpTop, curMatrix[top][c]];
  }
  // ^
  for (let r = top; 0 < r; r--) {
    [curMatrix[r][COL - 1], tmpTop] = [tmpTop, curMatrix[r][COL - 1]];
  }
  // <--
  for (let c = COL - 1; 0 < c; c--) {
    [curMatrix[0][c], tmpTop] = [tmpTop, curMatrix[0][c]];
  }
  // v
  for (let r = 0; r < top; r++) {
    [curMatrix[r][0], tmpTop] = [tmpTop, curMatrix[r][0]];
  }

  let tmpBot = 0;
  // -->
  for (let c = 1; c < COL - 1; c++) {
    [curMatrix[bot][c], tmpBot] = [tmpBot, curMatrix[bot][c]];
  }
  // v
  for (let r = bot; r < ROW - 1; r++) {
    [curMatrix[r][COL - 1], tmpBot] = [tmpBot, curMatrix[r][COL - 1]];
  }
  // <--
  for (let c = COL - 1; 0 < c; c--) {
    [curMatrix[ROW - 1][c], tmpBot] = [tmpBot, curMatrix[ROW - 1][c]];
  }
  // ^
  for (let r = ROW - 1; bot < r; r--) {
    [curMatrix[r][0], tmpBot] = [tmpBot, curMatrix[r][0]];
  }
  return curMatrix;
}

function copyMatrix(matrix) {
  const newMatrix = Array.from({ length: ROW }, () => []);
  for (let i = 0; i < ROW; i++) {
    newMatrix[i] = [...matrix[i]];
  }
  return newMatrix;
}

function isNotInBound(row, col) {
  return row < 0 || ROW <= row || col < 0 || COL <= col;
}

function printMatrix(prefix) {
  console.log(prefix);
  for (let m of matrix) {
    console.log(`${m}`);
  }
  console.log();
}
/** ================================== UTIL FUNCTION ================================== */
