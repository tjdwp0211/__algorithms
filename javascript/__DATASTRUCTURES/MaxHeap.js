class MaxHeap {
  constructor() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  swap(x, y) {
    [this.items[x], this.items[y]] = [this.items[y], this.items[x]];
  }

  /**
   * @@@@@@@@@@@@ 안되던 heapifyDown 함수 @@@@@@@@@@@@
   * heapifyDown(head) {
    while (2 * head + 2 < this.size()) {
      let maxIndex = head;
      const [left, right] = [2 * head + 1, 2 * head + 2];

      if (this.items[maxIndex] < this.items[left]) {
        maxIndex = left;
      }

      if (this.items[maxIndex] < this.items[right]) {
        maxIndex = right;
      }

      if (maxIndex !== head) {
        this.swap(maxIndex, head);
        head = maxIndex;
      } else {
        break;
      }
    }
  }
   */

  /** 모든 자식을 고려하는 heapifyDown */
  heapifyDown(head) {
    while (true) {
      let maxIndex = head;
      const left = 2 * head + 1;
      const right = 2 * head + 2;

      if (left < this.size() && this.items[left] > this.items[maxIndex]) {
        maxIndex = left;
      }
      if (right < this.size() && this.items[right] > this.items[maxIndex]) {
        maxIndex = right;
      }

      if (maxIndex === head) break;
      this.swap(head, maxIndex);
      head = maxIndex;
    }
  }

  heapifyUp(tail) {
    while (Math.floor((tail - 1) / 2) >= 0) {
      const parents = Math.floor((tail - 1) / 2);
      if (this.items[parents] < this.items[tail]) {
        this.swap(tail, parents);
        tail = parents;
      } else {
        break;
      }
    }
  }

  heapPush(node) {
    if (this.size() === 0) {
      this.items.push(node);
      return node;
    }

    this.items.push(node);
    this.heapifyUp(this.size() - 1);
    return node;
  }

  heapPop() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.size() === 1) {
      return this.items.pop();
    }

    const popped = this.items[0];
    this.items[0] = this.items.pop();
    this.heapifyDown(0);
    return popped;
  }
}
