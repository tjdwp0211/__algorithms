// 체스판: 8x8
// 나이트 L 자로 이동
// 1. 수평 두칸 이동
//   1-1. 수직 한칸 이동
// 2. 수직 두칸 이동
//   2-1. 수평 한칸 이동

// Column: a, b, c, d, e, f, g, h
// Row: 1, 2, 3, 4, 5, 6, 7, 8

const DIRECTORY = "./javascript/dongbinna/chapter_2/simulation_ex3/input.txt";
const fs = require("fs");

const R_VECTOR = [-2, -2, -1, 1, 2, 2, 1, -1];
const C_VECTOR = [-1, 1, 2, 2, 1, -1, -2, -2];

const INPUT = [...fs.readFileSync(DIRECTORY).toString()];
const [rowInput, colInput] = [INPUT[0].charCodeAt() - 97, Number(INPUT[1]) - 1];

const FILED = Array.from({ length: 8 }).map(() =>
  Array.from({ length: 8 }).fill(0)
);

let result = 0;
const currentCoordinates = [rowInput, colInput];
Array.from({ length: 8 }).forEach((_, i) => {
  const dirR = currentCoordinates[0] + R_VECTOR[i];
  const dirC = currentCoordinates[1] + C_VECTOR[i];

  if (0 <= dirR && dirR < 8 && 0 <= dirC && dirC < 8) {
    result += 1;
  }
});

console.log(result);
