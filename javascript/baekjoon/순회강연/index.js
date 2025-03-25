const { OTHERS, LOCAL } = { OTHERS: "/dev/stdin", LOCAL: `${__dirname}/input.txt` };
const fs = require("fs");

let [N, ...bills] = fs
  .readFileSync(process.platform === "linux" ? OTHERS : LOCAL)
  .toString()
  .trim()
  .split("\n")
  .map((input, i) => (i === 0 ? Number(input) : input.split(" ").map(Number)));

let maxLimitDay = 0;
bills = bills.sort(([thePay, theDay], [otherPay, otherDay]) => {
  if (otherPay < thePay) {
    maxLimitDay = Math.max(theDay, maxLimitDay);
    return otherPay - thePay;
  } else if (otherPay === thePay) {
    return theDay - otherDay;
  }
});

let response = 0;
const visited = Array.from({ length: maxLimitDay }, () => false);
while (bills.length > 0) {
  const [curPay, curLimitDay] = bills.shift();
  for (let day = curLimitDay; 0 < day; day--) {
    if (visited[day]) continue;
    visited[day] = true;
    response += curPay;
    break;
  }
}
console.log(response);
