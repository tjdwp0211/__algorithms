const INPUT_1 = [
  ["ICN", "JFK"],
  ["HND", "IAD"],
  ["JFK", "HND"],
];
const INPUT_2 = [
  ["ICN", "SFO"],
  ["ICN", "SFO"],
  ["ICN", "SFO"],
  ["ICN", "SFO"],
  ["ICN", "ATL"],

  ["SFO", "ATL"],
  ["ATL", "ICN"],
  ["ATL", "SFO"],
];

const INPUT_3 = [
  ["ICN", "BBB"],
  ["BBB", "ICN"],
  ["ICN", "AAA"],
];

const graph = {};
const visited = [];

function DFS({ curAirport }) {
  while (graph[curAirport] && graph[curAirport].length > 0) {
    const next = graph[curAirport].shift();
    DFS({ curAirport: next });
  }
  visited.push(curAirport);
}

function solution(tickets) {
  tickets.forEach(([from, to]) => {
    if (!graph[from]) graph[from] = [];
    if (!graph[to]) graph[to] = [];

    graph[from].push(to);
  });

  Object.keys(graph).forEach(key => {
    graph[key].sort();
  });

  DFS({ curAirport: "ICN" });

  return visited;
}

console.log(solution(INPUT_3));
