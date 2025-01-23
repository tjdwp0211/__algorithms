class Queue {
  constructor() {
    this.items = [];
  }

  [Symbol.iterator] = function* () {
    for (item of this.items) {
      yield item;
    }
  };

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  pushBack(value) {
    this.items.push(value);
  }

  popFront() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.shift();
  }

  head() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[0];
  }

  tail() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.at(-1);
  }
}
