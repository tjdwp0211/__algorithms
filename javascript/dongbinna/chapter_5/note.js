// bisectLeft(a, x):
// 정렬된 순서를 유지하면서, 배열 a에 x를 삽입할 가장 왼쪽 인덱스를 반환.
// bisectRight(a, x):
// 정렬된 순서를 유지하면서, 배열 a에 x를 삽입할 가장 오른쪽 인덱스를 반환.

// 1,  2,  3,  4,  4,  8
//           ^       ^
//         left    right

function bisectLeft({ sorted, target, start, end }) {
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (sorted[mid] < target) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return end;
}

function bisectRight({ sorted, target, start, end }) {
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (target < sorted[mid]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return end;
}

function countByRange({ sorted, target }) {
  const left = bisectLeft({ start: 0, end: sorted.length, sorted, target });
  const right = bisectRight({ start: 0, end: sorted.length, sorted, target });

  return right - left;
}

const TEST_1 = [1, 1, 2, 2, 2, 2, 3]; // 4
const TEST_2 = [2, 2, 2, 2, 2, 2, 2]; // 7
const TEST_3 = [1, 1, 1, 1, 1, 1, 1]; // 0

console.log(countByRange({ sorted: TEST_1, target: 2 }));
