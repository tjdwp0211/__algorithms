class Stack {
  constructor() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  top() {
    if (this.size() === 0) return null;
    return this.items.at(0);
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    if (this.size() === 0) return null;
    return this.items.pop();
  }
}

const DIR = { others: "/dev/stdin", local: `${__dirname}/input.txt` };
const fs = require("fs");

const [N, ...LOG] = fs
  .readFileSync(process.platform === "linux" ? DIR.others : DIR.local)
  .toString()
  .split("\n")
  .map((input, i) => (i === 0 ? Number(input) : input.split(" ").map(Number)));
const stack = new Stack();

let curTime = 0;
let curPoint = 0;
while (curTime < N) {
  const curTimeLog = LOG[curTime];
  // console.log(curTime, stack);

  let [point, cost] = [0, 0];

  if (curTimeLog[0]) {
    [point, cost] = [curTimeLog[1], curTimeLog[2] - 1];
  } else if (stack.size() > 0) {
    [point, cost] = stack.pop();
    cost -= 1;
  }

  if (cost === 0) {
    curPoint += point;
  } else {
    stack.push([point, cost]);
  }

  curTime += 1;
}

console.log(curPoint);
