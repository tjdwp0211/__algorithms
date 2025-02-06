// N개의 원소를 포함하고 있는 수열
// 수열: 오름차순 정렬
// ex)
// 수열: { 1, 1, 2, 2, 2, 2, 3 }
// x = 2
// 수열의 값이 2인 원소가 4개이므로 4를 출력.
// 1 <= N <= 1,000,000
// -10^9 <= x <= 10^9
// -1,000,000,000 <= x <= 1,000,000,000
// 단, 이 문제는 시간 복잡도 O(logN)을 설계해야 함.

// 7 2
// 1 1 2 2 2 2 3

// 4

const DIRECTORY = "./javascript/dongbinna/chapter_5/binarySearch_ex2/input.txt";
const fs = require("fs");

const INPUT = fs.readFileSync(DIRECTORY).toString().split("\n");
const [N, X] = INPUT[0].split(" ").map(Number);
const sequence = INPUT[1].split(" ").map(Number);

function bisectLeft({ sorted, x, startIdx, endIdx }) {
  while (startIdx < endIdx) {
    let midIdx = Math.floor((startIdx + endIdx) / 2);
    if (sorted[midIdx] < x) {
      startIdx = midIdx + 1;
    } else {
      endIdx = midIdx;
    }
  }
  return endIdx;
}
function bisectRight({ sorted, x, startIdx, endIdx }) {
  while (startIdx < endIdx) {
    let midIdx = Math.floor((startIdx + endIdx) / 2);
    if (x < sorted[midIdx]) {
      endIdx = midIdx;
    } else {
      startIdx = midIdx + 1;
    }
  }
  return endIdx;
}
function countByRange({ sorted, x }) {
  const left = bisectLeft({ startIdx: 0, endIdx: sorted.length, sorted, x });
  const right = bisectRight({ startIdx: 0, endIdx: sorted.length, sorted, x });
  return right - left;
}
console.log(`${countByRange({ sorted: sequence, x: X })}`);
