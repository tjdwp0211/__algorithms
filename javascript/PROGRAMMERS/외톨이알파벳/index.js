function solution(INPUT) {
  const keyValueMap = new Map();
  const spreadInput = [...INPUT];
  let result = "";

  spreadInput.forEach((s, i) => {
    const curStrBasket = keyValueMap.get(s);
    if (keyValueMap.get(s)) {
      keyValueMap.set(s, [...curStrBasket, i]);
    } else {
      keyValueMap.set(s, [i]);
    }
  });

  for (let key of keyValueMap.keys()) {
    const idxList = keyValueMap.get(key);
    if (idxList.length < 2) continue;

    const len = idxList.length;
    const fristIdx = idxList[0];
    const lastIdx = idxList[len - 1];

    if (lastIdx - fristIdx !== len - 1) {
      result = `${result}${key}`;
    }
  }
  result = [...result].sort().join("");

  return result === "" ? "N" : result;
}

console.log(solution("eeddee"));
