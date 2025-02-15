// N 개의 도시가 존재
// message send => a ... k ... b
// X -> Y 는 있지만, Y -> X 가 없을 수도 있음 (방향성 존재)
// C 에서 메세지를 최대한 많은 도시로 보낼 예정
// 각 도시 번호와 간선의 정보가 주어짐.
// C에서 보낸 메세지를 받게 되는 [도시의 개수]와 [도시들이 모두 메세지를 받는데 까지 걸리는 시간]
// 1 <= N(정점 갯수) <= 30_000
// 1 <= M(간선 갯수) <= 200_000
// 1 <= C(시작점) <= N
// X: a 도시
// Y: b 도시
// Z: 전달 시간

// 3 2 1
// 1 2 4
// 1 3 2

class HeapQ {
  constructor() {
    this.items = [];
  }

  [Symbol.iterator] = function* () {
    for (let item of this.items) {
      yield item;
    }
  };

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  swap(idx1, idx2) {
    [this.items[idx1], this.items[idx2]] = [this.items[idx2], this.items[idx1]];
  }

  heapifyDown(start) {
    while (2 * start + 2 < this.size()) {
      let minIdx = start;
      let [leftChild, rightChild] = [2 * start + 1, 2 * start + 2];

      if (this.items[leftChild] < this.items[minIdx]) {
        minIdx = leftChild;
      }
      if (this.items[rightChild] < this.items[minIdx]) {
        minIdx = rightChild;
      }

      if (minIdx !== start) {
        this.swap(minIdx, start);
        start = minIdx;
      } else {
        break;
      }
    }
  }

  heapifyUp(start) {
    while (Math.floor((start - 1) / 2) >= 0) {
      let parent = Math.floor((start - 1) / 2);
      if (this.items[parent] > this.items[start]) {
        this.swap(parent, start);
        start = parent;
      } else {
        break;
      }
    }
  }

  heapPush(value) {
    this.items.push(value);
    if (this.size() === 1) {
      return value;
    }

    this.heapifyUp(this.size() - 1);
    return value;
  }

  heapPop() {
    if (this.isEmpty()) {
      return null;
    }

    if (this.size() === 1) {
      return this.items.pop();
    }

    const head = this.items[0];
    this.items[0] = this.items.pop();
    this.heapifyDown(0);
    return head;
  }
}

const DIRCTORY = "./javascript/dongbinna/chapter_7/shortCut_ex1/input.txt";
const fs = require("fs");
const INPUT = fs.readFileSync(DIRCTORY).toString().split("\n");

const [N, M, START] = INPUT[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }).map(() => new HeapQ());
const distanceTable = Array.from({ length: N + 1 }).map(() => Infinity);

for (let i = 1; i < M + 1; i++) {
  const [from, to, timeCost] = INPUT[i].split(" ").map(Number);
  graph[from].heapPush([timeCost, to]);
}

const hq = new HeapQ();
hq.heapPush([0, START]);
while (!hq.isEmpty()) {
  const [curTimeCost, curNode] = hq.heapPop();
  distanceTable[curNode] = curTimeCost;

  if (distanceTable[curNode] < curTimeCost) {
    continue;
  }

  for (let [timeCost, linked] of graph[curNode]) {
    const calcTimeCost = distanceTable[curNode] + timeCost;
    if (calcTimeCost < distanceTable[linked]) {
      distanceTable[linked] = calcTimeCost;
    }
  }
}

let maxCost = -Infinity;
let gotMessageCount = 0;
distanceTable.slice(1, N + 1).forEach((dist, i) => {
  if (maxCost < dist) {
    maxCost = dist;
    gotMessageCount += 1;
  }
});
console.log(gotMessageCount, maxCost);
