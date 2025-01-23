const INPUT_1 = { NUMBERS: [1, 1, 1, 1, 1], TARGET: 3 };
const INPUT_2 = { NUMBERS: [4, 1, 2, 1], TARGET: 4 };

let result = 0;

function DFS({ idx, numbers, currentSumValue, target }) {
  if (idx === numbers.length) {
    if (currentSumValue === target) {
      result += 1;
    }
    return;
  }

  DFS({
    idx: idx + 1,
    currentSumValue: currentSumValue + numbers[idx],
    numbers,
    target,
  });
  DFS({
    idx: idx + 1,
    currentSumValue: currentSumValue - numbers[idx],
    numbers,
    target,
  });
}

function solution(numbers, target) {
  DFS({ idx: 0, currentSumValue: 0, numbers, target });

  return result;
}

console.log(solution(INPUT_2.NUMBERS, INPUT_2.TARGET));
