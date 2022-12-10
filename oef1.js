import readlineSync from "readline-sync";

const arr = readlineSync.question("Geef je getallen aub :\n>");

const list = arr.split(",");

const evenNum = list.filter((e) => parseInt(e) % 3 == 0);
console.log(evenNum);
const sumEven = evenNum.reduce((acc, curr) => acc + parseInt(curr), 0);

console.log(list);
console.log(sumEven);
