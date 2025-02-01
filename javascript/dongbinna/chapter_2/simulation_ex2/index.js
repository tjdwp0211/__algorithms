// 정수 0 <= N <= 23
// 00:00:00 ~ N:59:59
// 위 시간의 사이에 3이 하나라도 포함된 경우의 수를 구함
// Ex) N = 1
// O: 00:00:03, 00:13:30, ...
// X: 00:02:55, 01:27:45, ...

const DIRECTORY = `./javascript/dongbinna/chater2/simulation_ex2/input.txt`;

const fs = require("fs");
const INPUT = fs.readFileSync(DIRECTORY).toString().split("\n").map(Number);

const targetNumbers = [
  3, 13, 23, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 43, 53,
];

// =================for loop solution=================
INPUT.forEach((testCase, i) => {
  let result = 0;

  for (let h = 0; h < testCase + 1; h++) {
    for (let m = 0; m < 60; m++) {
      for (let s = 0; s < 60; s++) {
        const isTargetCase = targetNumbers.some((num) => {
          return h === num || m === num || s === num;
        });

        if (isTargetCase) result += 1;
      }
    }
  }

  console.log(`${i}: ${result}`);
});
// =================for loop solution=================

// =================DFS solution: Maximum call stack size exceded=================
// 일반적으로 call stack size => 10_000 ~ 20_000,
// 근데 코드는 python과 같지만 로컬에서 1인 경우도 되지 않음.

// function DFS({ n, hour, min, sec, count }) {
//   if (hour === n && min === 59 && sec === 59) {
//     return count;
//   }

//   if (targetNumbers.some((num) => hour === num || min === num || sec === num)) {
//     count += 1;
//   }

//   sec += 1;
//   if (sec === 60) {
//     min += 1;
//     sec = 0;
//     if (min === 60) {
//       hour += 1;
//       min = 0;
//     }
//   }

//   return DFS({ n, hour, min, sec, count });
// }

// INPUT.forEach((testCase, i) => {
//   const result = DFS({ n: testCase, hour: 0, min: 0, sec: 0, count: 0 });
//   console.log(`${i}: ${result}`);
// });

// =================DFS solution: Maximum call stack size exceded=================
// 일반적으로 call stack size => 10_000 ~ 20_000,
// 근데 코드는 python과 같지만 로컬에서 1인 경우도 되지 않음.
