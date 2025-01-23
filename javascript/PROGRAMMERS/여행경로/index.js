const INPUT = [
  [
    ["ICN", "JFK"],
    ["HND", "IAD"],
    ["JFK", "HND"],
  ],
  [
    ["ICN", "SFO"],
    ["ICN", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "ICN"],
    ["ATL", "SFO"],
  ],

  [
    ["ICN", "BBB"],
    ["BBB", "ICN"],
    ["ICN", "AAA"],
  ],
];

const graph = {};
const routes = [];

const preOutWhile = [];
const postInWhile = [];
const postOutWhile = [];

function printGraph({ prefix }) {
  Object.keys(graph).forEach(key => console.log(`${prefix}`, graph[key]));
}

function DFS({ currentAirport }) {
  while (graph[currentAirport] && graph[currentAirport].length > 0) {
    const next = graph[currentAirport].shift();
    DFS({ currentAirport: next });
  }
  routes.push(currentAirport);
}

function DFS_TEST({ currentAirport }) {
  preOutWhile.push(currentAirport); // <===== BREFORE reverse INPUT[1]:
  // [ 'ICN', 'ATL', 'ICN', 'SFO', 'ATL', 'SFO' ]

  while (graph[currentAirport] && graph[currentAirport].length > 0) {
    const next = graph[currentAirport].shift();
    DFS({ currentAirport: next });

    postInWhile.push(currentAirport); // <===== BREFORE reverse INPUT[1]:
    // [ 'ATL', 'SFO', 'ICN', 'ATL', 'ICN' ]
  }

  postOutWhile.push(currentAirport); // <===== BREFORE reverse INPUT[1]:
  // [ 'SFO', 'ATL', 'SFO', 'ICN', 'ATL', 'ICN' ]
}

function solution(tickets) {
  tickets.forEach(([from, to]) => {
    if (!graph[from]) graph[from] = [];
    if (!graph[from]) graph[to] = [];

    graph[from].push(to);
  });

  Object.keys(graph).forEach(key => {
    graph[key].sort();
  });

  DFS({ currentAirport: "ICN" });

  return routes.reverse();
}

console.log(solution(INPUT[1]));
