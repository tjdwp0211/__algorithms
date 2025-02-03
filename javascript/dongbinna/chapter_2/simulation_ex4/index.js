// 알파벳 + 숫자(0~9)로 구성된 문자열
// 알파벳 오름차순 정렬 및, 숫자 모두 더해 출력

const DIRECTORY = "./javascript/dongbinna/chapter_2/simulation_ex4/input.txt";
const fs = require("fs");

const NUMBER_LIST = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const INPUT = fs.readFileSync(DIRECTORY).toString().split("\n");

INPUT.forEach((input, i) => {
  const sortedInput = [...input].sort();

  let calced = 0;
  let numberEndIndex = 0;
  sortedInput.forEach((el, i) => {
    if (NUMBER_LIST.some((num) => num === el)) {
      calced = calced + Number(el);
      numberEndIndex = i;
    }
  });

  sortedInput.splice(0, numberEndIndex + 1);
  sortedInput.push(calced);

  console.log(`TC_${i}: ${sortedInput.join("")}`);
});
