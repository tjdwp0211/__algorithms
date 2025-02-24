const DIR = { others: "/dev/stdin", local: `${__dirname}/input.txt` };
const fs = require("fs");

const [[N, M], ...INPUT] = fs
  .readFileSync(process.platform === "linux" ? DIR.others : DIR.local)
  .toString()
  .split("\n")
  .map((input, i) => (i === 0 ? input.split(" ").map(Number) : Number(input)));

const parkingCostList = INPUT.splice(0, N);
const carWeightList = INPUT.splice(0, M);
const timeLog = INPUT.splice(0, 2 * M);
const queue = [];

let response = 0;
const isParkingSpace = Array.from({ length: N }, () => 2_001);
while (timeLog.length > 0 && queue.length >= 0) {
  const curCar = timeLog.shift();

  if (curCar < 0) {
    const findParkedIndex = findParkingSpaceByCarNumber(curCar);
    if (findParkedIndex >= 0) {
      const calced = parkingCostList[findParkedIndex] * carWeightList[Math.abs(curCar) - 1];
      response += calced;

      if (queue.length > 0) {
        const popped = queue.shift();
        isParkingSpace[findParkedIndex] = popped;
      } else {
        isParkingSpace[findParkedIndex] = 2_001;
      }
    }
  } else {
    const findRemainIndex = findParkingSpaceByCarNumber(2_001);
    if (findRemainIndex >= 0) {
      isParkingSpace[findRemainIndex] = curCar;
    } else {
      queue.push(curCar);
    }
  }
}
console.log(response);

function findParkingSpaceByCarNumber(carNumber) {
  return isParkingSpace.findIndex((el) => el === Math.abs(carNumber));
}

// console.log("curCar:", curCar);
// console.log("findParkedIndex:", findParkedIndex);
// console.log("spaceCost:", parkingCostList[findParkedIndex]);
// console.log("carWeightCost", carWeightList[Math.abs(curCar) - 1]);
// console.log();
// console.log(isParkingSpace);
// console.log(curCar, "is PARKED OUT &", popped, " CAR PARKING IN", findParkedIndex, " & response is", response);
