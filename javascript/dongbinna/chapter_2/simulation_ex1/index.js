// NxN
// (1, 1) (N, N) -> (0, 0) (N - 1, N - 1)
// L R U D
// 벗어나는 움직임은 무시해야 함.

const DIRECTORY = `./javascript/dongbinna/chater2/simulation_ex1/input.txt`;

const fs = require("fs");
const INPUT = fs.readFileSync(DIRECTORY).toString().split("\n");

const R_VECTOR = [-1, 1, 0, 0]; // |
const C_VECTOR = [0, 0, -1, 1]; // ㅡ
const directionDict = { U: 0, D: 1, L: 2, R: 3 };

const N = Number(INPUT[0]);
const order = INPUT[1].split(" ");
const matrix = Array.from({ length: N }).map(() =>
  Array.from({ length: N }).fill(0)
);

const currentLocation = [0, 0];
order.forEach((el, i) => {
  matrix[currentLocation[0]][currentLocation[1]] = i + 1;
  const dir = directionDict[el];
  const nextR = currentLocation[0] + R_VECTOR[dir];
  const nextC = currentLocation[1] + C_VECTOR[dir];

  if (0 <= nextR && nextR < N && 0 <= nextC && nextC < N) {
    currentLocation[0] = nextR;
    currentLocation[1] = nextC;
  }
});

console.log(currentLocation[0] + 1, currentLocation[1] + 1);
