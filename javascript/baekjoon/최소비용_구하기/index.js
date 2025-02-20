class PriorityQueue {
  constructor() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  swap(idx1, idx2) {
    [this.items[idx1], this.items[idx2]] = [this.items[idx2], this.items[idx1]];
  }

  heapifyUp(tail) {
    while (Math.floor((tail - 1) / 2) >= 0) {
      const parents = Math.floor((tail - 1) / 2);
      if (this.items[tail].curCost < this.items[parents].curCost) {
        this.swap(tail, parents);
        tail = parents;
      } else {
        break;
      }
    }
  }

  heapifyDown(head) {
    while (2 * head + 2 < this.size()) {
      let minIdx = head;
      const [left, right] = [2 * head + 1, 2 * head + 2];

      if (this.items[left].curCost < this.items[minIdx].curCost) {
        minIdx = left;
      }
      if (this.items[right].curCost < this.items[minIdx].curCost) {
        minIdx = right;
      }

      if (minIdx !== head) {
        this.swap(head, minIdx);
        head = minIdx;
      } else {
        break;
      }
    }
  }

  heappush(value) {
    if (this.items.length === 0) {
      this.items.push(value);
      return value;
    }
    this.items.push(value);
    this.heapifyUp(this.size() - 1);
    return value;
  }

  heappop() {
    if (this.items.length === 1) {
      return this.items.pop();
    }
    const head = this.items[0];
    this.items[0] = this.items.pop();
    this.heapifyDown(0);
    return head;
  }
}

const DIR = { others: "/dev/stdin", local: `${__dirname}/input.txt` };
const fs = require("fs");

const INPUT = fs
  .readFileSync(process.platform === "linux" ? DIR.others : DIR.local)
  .toString()
  .split("\n");

const [N, M] = [INPUT[0], INPUT[1]].map(Number);
const [START, END] = INPUT[M + 2].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => ({}));

for (let i = 2; i < M + 2; i++) {
  const [from, to, cost] = INPUT[i].split(" ").map(Number);

  if (graph[from][to] === undefined || graph[from][to] > cost) graph[from][to] = cost;
}

const distances = Array.from({ length: N + 1 }, () => Infinity);
[distances[0], distances[START]] = [0, 0];

const pq = new PriorityQueue();
pq.heappush({ curNode: START, curCost: 0 });

while (!pq.isEmpty()) {
  const { curNode, curCost } = pq.heappop();

  for (let nextNode of Object.keys(graph[curNode])) {
    const nextCost = graph[curNode][nextNode];

    if (distances[nextNode] > distances[curNode] + nextCost) {
      distances[nextNode] = distances[curNode] + nextCost;
      pq.heappush({ curNode: nextNode, curCost: distances[nextNode] });
    }
  }
}

console.log(distances);
console.log(distances[END]);
