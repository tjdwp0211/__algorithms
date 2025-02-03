/**
 * size():
 * 현재 아이템의 갯수 조회
 *
 * swap(idx1, idx2):
 * idx1과 idx2의 값을 변경
 *
 * heafifyDown():
 * items의 head 값을 빼내면, 해당 함수로 items 내부 우선순위 재정렬
 *
 * heafifyUp():
 * items의 tail에 값을 넣으면, 해당 함수로 items 정렬 삽입
 *
 * push(val):
 * value를 items의 tail에 삽입
 *
 * pop():
 * items의 head의 값을 제거 및 return
 */
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
      console.log(`IN DOWN: ${this.items}`);
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
