function solution(N, computers) {
  const visited = Array.from({ length: N }, () => false);
  let response = 0;

  /** ===== MAIN LOGIC ===== */
  return (function main() {
    for (let node = 0; node < N; node++) {
      if (!visited[node]) {
        dfs(node);
        response += 1;
      }
    }

    return response;
  })();
  /** ===== MAIN LOGIC ===== */

  function dfs(curNode) {
    visited[curNode] = true;

    for (let [next, isLinked] of computers[curNode].entries()) {
      if (isLinked === 1 && !visited[next]) {
        dfs(next);
      }
    }
  }
}
