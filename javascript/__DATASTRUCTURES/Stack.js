class Stack {
  constructor() {
    this.items = [];
  }

  [Symbol.iterator] = function* () {
    for (item of this.items) {
      yield item;
    }
  };

  len() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  top() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.at(-1);
  }
}
