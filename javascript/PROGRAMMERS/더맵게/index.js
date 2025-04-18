const fs = require("fs");
const INPUT = fs.readFileSync("input.txt").toString().split("\n");

const scoville = INPUT[0].split(",").map(Number);
const K = Number(INPUT[1]);

class MinHeap {
  constructor() {
    this.items = [];
  }

  [Symbol.iterator] = function* () {
    for (let i = 0; i < this.size(); i++) {
      yield this.items[i];
    }
  };

  size() {
    return this.items.length;
  }

  swap(idx1, idx2) {
    [this.items[idx1], this.items[idx2]] = [this.items[idx2], this.items[idx1]];
  }

  heafifyDown() {
    let curIndex = 0;
    let n = this.size();

    while (curIndex < n) {
      const left = 2 * curIndex + 1;
      const right = 2 * curIndex + 2;

      let value = this.items[curIndex];
      let valueIndex = curIndex;

      if (left < n && this.items[left] < value) {
        value = this.items[left];
        valueIndex = left;
      }
      if (right < n && this.items[right] < value) {
        value = this.items[right];
        valueIndex = right;
      }

      if (value !== this.items[curIndex]) {
        this.swap(curIndex, valueIndex);
        curIndex = valueIndex;
      } else {
        break;
      }
    }
  }

  heafifyUp() {
    let curIndex = this.size() - 1;
    let curParentIndex = Math.floor((curIndex - 1) / 2);

    while (this.items[curIndex] < this.items[curParentIndex]) {
      this.swap(curParentIndex, curIndex);

      curIndex = curParentIndex;
      curParentIndex = Math.floor((curIndex - 1) / 2);
    }
  }

  push(val) {
    this.items.push(val);
    this.heafifyUp();

    return this.items;
  }

  pop() {
    if (this.size() === 0) {
      return null;
    }
    if (this.size() === 1) {
      return this.items.pop();
    }

    const popped = this.items[0];
    this.items[0] = this.items.pop();
    this.heafifyDown();
    return popped;
  }
}

function solution(scoville, K) {
  let res = 0;
  const heap = new MinHeap();

  for (let i = 0; i < scoville.length; i++) {
    heap.push(scoville[i]);
  }

  if (heap.items.every(el => el === 0)) {
    return -1;
  }

  if (heap.items.every(el => el >= K)) {
    return 0;
  }

  while (heap.items[0] < K && heap.size() > 1) {
    let firstItem = heap.pop();
    let secondItem = heap.pop();

    heap.push(firstItem + 2 * secondItem);
    res += 1;
  }
  return heap.items.every(el => el >= K) ? res : -1;
}

console.log(solution(scoville, K));
