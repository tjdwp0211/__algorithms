// 떡의 길이는 일정하지 않다.
// 절단기에 높이(H) 지정
// ex)
// 떡 길이: [19, 14, 10, 17], 절단기 높이: 15
// 떡 길이: [15, 14, 10, 15], 절단기 높이: 15
// 잘린 떡: [4, 0, 0, 2] -> 손님께 6 제공
// 손님 요청 길이 M -> 적어도 M만큼 떡을 얻기 위한
// 절단기의 최대 높이값(H)

// 1 <= 떡의 갯수 (N) <= 1,000,000
// 1 <= 손님 요청 길이 (M) <= 2,000,000,000
// 단, 떡 N개의 총합은 항상 M이 만족한다.
// 0 <= H <= 1,000,000,000

// 4 6
// 19 15 10 17
// 4 6
// 10 10 10 10

// 15
// 8

const DIRECTORY = "./javascript/dongbinna/chapter_5/binarySearch_ex1/input.txt";
const fs = require("fs");

const INPUT = fs.readFileSync(DIRECTORY).toString().split("\n");

const TEST_CASE = Number(INPUT[0]);

for (let tc = 1; tc < TEST_CASE + 1; tc++) {
  const [N, M] = INPUT[2 * tc - 1].split(" ").map(Number);
  const ddeoks = INPUT[2 * tc].split(" ").map(Number);

  const result = binarySearch({
    start: 0,
    end: Math.max(...ddeoks),
    cutLength: Infinity,
    maxHeight: -1,
    m: M,
    ddeoks,
  });

  console.log(result);
}

function binarySearch({ start, end, ddeoks, maxHeight, cutLength, m }) {
  if (start === end - 1) {
    return maxHeight;
  }

  const middle = Math.floor((start + end) / 2);
  let currentLength = 0;
  ddeoks.forEach((ddeok) => {
    const curCut = ddeok - middle;
    if (curCut > 0) currentLength += curCut;
  });

  if (currentLength >= m) {
    if (currentLength === m) {
      return middle;
    }
    cutLength = Math.min(currentLength, cutLength);
    maxHeight = middle;
  }

  if (currentLength > m) {
    return binarySearch({
      start: middle,
      end,
      ddeoks,
      maxHeight,
      cutLength,
      m,
    });
  }

  if (currentLength < m) {
    return binarySearch({
      end: middle,
      start,
      ddeoks,
      maxHeight,
      cutLength,
      m,
    });
  }
}
