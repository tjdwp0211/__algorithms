const { OTHERS, LOCAL } = { OTHERS: "/dev/stdin", LOCAL: `${__dirname}/input.txt` };
const fs = require("fs");

const N = Number(fs.readFileSync(process.platform === "linux" ? OTHERS : LOCAL).toString());
const visited = Array.from({ length: 10 }, () => false);
const combs = [];

for (let digits = 1; digits < 11; digits++) {
  dfs(digits, 0, []);
}

function dfs(digits, startNum, picked) {
  if (picked.length === digits) {
    combs.push(Number([...picked].reverse().join("")));
    return;
  }

  for (let i = startNum; i < 10; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    picked.push(i);
    dfs(digits, i, picked);
    visited[i] = false;
    picked.pop();
  }
}
// entries
// for (let [i, c] of combs.sort((a, b) => a - b).entries()) console.log(i, c);

if (N < combs.length) {
  console.log(combs.sort((a, b) => a - b)[N]);
} else {
  console.log(-1);
}
