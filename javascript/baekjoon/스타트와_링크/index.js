const DIR = { others: "/dev/stdin", local: `${__dirname}/input.txt` };

const fs = require("fs");
const INPUT = fs
  .readFileSync(process.platform === "linux" ? DIR.others : DIR.local)
  .toString()
  .split("\n");

const N = Number(INPUT[0]);
const matrix = INPUT.slice(1, N + 1).map((input) =>
  input.split(" ").map(Number)
);

let response = Infinity;
function DFS(startTeam, start) {
  if (startTeam.length === N / 2) {
    const linkTeam = Array.from({ length: N }, (_, i) => i).filter((link) => {
      return !startTeam.includes(link);
    });

    const startTeamPower = calcTeamPower(startTeam);
    const linkTeamPower = calcTeamPower(linkTeam);

    // console.log(`${startTeam} vs ${linkTeam}`);
    // console.log(`${startTeamPower} vs ${linkTeamPower}`);
    // console.log();
    response = Math.min(response, Math.abs(startTeamPower - linkTeamPower));
    return;
  }

  for (let i = start; i < N; i++) {
    if (startTeam.includes(i)) continue;
    startTeam.push(i);
    DFS(startTeam, i);
    startTeam.pop();
  }
}

function calcTeamPower(team) {
  let power = 0;
  const len = N / 2;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      const [iIdx, jIdx] = [team[i], team[j]];
      power = power + matrix[iIdx][jIdx] + matrix[jIdx][iIdx];
    }
  }
  return power;
}

DFS([], 0);
console.log(response);
