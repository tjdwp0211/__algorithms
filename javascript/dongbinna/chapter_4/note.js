function minSortBySelect() {
  const arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

  console.log(`BEFORE SELECT_SORT: ${arr}`);
  arr.forEach((_, i) => {
    minIdx = i;
    arr.forEach((el, j) => {
      if (i <= j && arr[minIdx] > el) {
        minIdx = j;
      }
    });
    if (minIdx !== i) {
      [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]];
    }
  });
  console.log(`AFTER SELECT_SORT: ${arr}`);
}

function minSortByInsert() {
  const arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

  console.log(`BEFORE INSERT_SORT: ${arr}`);
  arr.forEach((_, i) => {
    arr.forEach((el, j) => {
      if (i < j) {
        return false;
      }
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        return true;
      }
    });
  });
  console.log(`AFTER INSERT_SORT: ${arr}`);
}

function minQuickSort() {
  const arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];
  console.log(`BEFORE QUICK_SORT: ${arr}`);

  function quickSort({ start, end }) {
    if (start >= end) {
      return;
    }

    const pivot = start;
    let [left, right] = [start + 1, end - 1];

    while (left <= right) {
      while (left < end && arr[left] <= arr[pivot]) {
        left += 1;
      }
      while (right >= 0 && arr[right] >= arr[pivot]) {
        right -= 1;
      }

      if (left > right) {
        [arr[right], arr[pivot]] = [arr[pivot], arr[right]];
      } else {
        [arr[left], arr[right]] = [arr[right], arr[left]];
      }
    }

    quickSort({ start: start, end: right - 1 });
    quickSort({ start: right + 1, end: end });
  }

  function otherQuickSort({ array }) {
    const { length } = array;
    if (length <= 1) {
      return array;
    }

    const pivot = array[0];
    const tail = array.slice(1, length);

    const leftSide = tail.filter((el, i) => el <= pivot);
    const rightSide = tail.filter((el, i) => el > pivot);

    return otherQuickSort({ array: leftSide })
      .concat([pivot])
      .concat(otherQuickSort({ array: rightSide }));
  }

  // quickSort({ start: 0, end: arr.length });
  // console.log(`AFTER QUICK_SORT: ${arr}`);

  console.log(`AFTER OTHER QUICK_SORT: ${otherQuickSort({ array: arr })}`);
}

minSortBySelect();
console.log();
minSortByInsert();
console.log();
minQuickSort();
