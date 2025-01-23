const INPUT_1 = {
  N: 3,
  MATRIX: [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ],
};
const INPUT_2 = {
  N: 3,
  MATRIX: [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ],
};

let result = 0;

function DFS({ curNode, matrix, visited, depth }) {
  visited[curNode] = true;

  for (let nextNode = 0; nextNode < matrix.length; nextNode++) {
    if (matrix[curNode][nextNode] && !visited[nextNode]) {
      DFS({ curNode: nextNode, depth: depth + 1, matrix, visited });
    }
  }
}

function solution(n, computers) {
  const visited = Array.from({ length: n }).fill(false);

  for (let v = 0; v < n; v++) {
    if (!visited[v]) {
      DFS({ curNode: v, depth: 0, matrix: computers, visited });
      result += 1;
    }
  }
  return result;
}

console.log(solution(INPUT_1.N, INPUT_1.MATRIX));
