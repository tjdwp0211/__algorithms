const DIRECTOR = "./javascript/baekjoon/게리맨더링/input.txt";
const fs = require("fs");
const INPUT = fs.readFileSync(DIRECTOR).toString().split("\n");

const N = Number(INPUT[0]);
const nodeKeys = INPUT[1].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
INPUT.slice(2, N + 2).forEach((input, i) => {
  const [_, ...linked] = input.split(" ").map(Number);
  linked.forEach((el) => graph[i + 1].push(el));
});

let minGapResult = Infinity;
(function main() {
  for (let r = 1; r < Math.ceil((N + 1) / 2); r++) {
    generateCombination(r, 1, []);
  }
  console.log(minGapResult === Infinity ? -1 : minGapResult);
})();

function generateCombination(r, start, picked) {
  if (picked.length === r) {
    const others = Array.from({ length: N + 1 }, (_, i) => i).filter(
      (i) => i && !picked.includes(i)
    );
    const isPickedLinked = isLinkedGroup(picked);
    const isOthersLinked = isLinkedGroup(others);

    if (isOthersLinked && isPickedLinked) {
      let pickedWeight = 0;
      let othersWeight = 0;
      nodeKeys.forEach((key, i) => {
        if (others.includes(i + 1)) othersWeight += key;
        if (picked.includes(i + 1)) pickedWeight += key;
      });

      // console.log("O: ", others, othersWeight);
      // console.log("P: ", picked, pickedWeight);

      minGapResult = Math.min(
        minGapResult,
        Math.abs(othersWeight - pickedWeight)
      );
    }
    return;
  }

  for (let i = start; i < N + 1; i++) {
    if (picked.includes(i)) continue;
    picked.push(i);
    generateCombination(r, i, picked);
    picked.pop();
  }
}

function isLinkedGroup(group) {
  const q = [group[0]];
  const visited = new Set();
  visited.add(group[0]);

  while (q.length) {
    const curNode = q.shift();
    for (let member of group) {
      if (graph[member].includes(curNode) && !visited.has(member)) {
        visited.add(member);
        q.push(member);
      }
    }
  }

  return group.length === visited.size;
}
