const line = require("fs").readFileSync("./test.txt", "utf-8");
//("./dev/stdin", "utf-8")
const lines = line.trim().split("\n");
const inputs = lines.slice(1, lines.length);

// const checkGroupWord = (input) => {
//   const store = [];
//   let tempChar;

//   for (const char of input) {
//     if (tempChar === char) {
//       continue;
//     }

//     const isExist = store.some((compareChar) => compareChar === char);
//     if (isExist) {
//       // 그룹 단어가 아닌거
//       return false;
//     } else {
//       store.push(char);
//     }
//     tempChar = char;
//     // console.log(char);
//   }
//   return true;
//   // 그룹단어
// };

// const getResult = (inputs) =>
//   inputs.reduce((prev, input) => {
//     const isGrupWord = checkGroupWord(input);
//     return isGrupWord ? prev + 1 : prev;
//   }, 0);

// console.log(getResult(inputs));

// const array = [1, 2, 3, 4, 5];

// const reduceTotal = array.reduce((prev, curr) => {
//   console.log(prev, curr);
//   return prev + curr;
// }, 0);

// console.log(reduceTotal);

// const checkHotelRoom = (input) => {
//   const [H, _, N] = input.split(" ").map((input) => +input);

//   let currH = 0;
//   let currW = 1;

//   Array.from({ length: N }).forEach(() => {
//     if (currH === H) {
//       currW += 1;
//       currH = 0;
//     }
//     currH += 1;
//   });
//   return `${currH}${currW > 9 ? currW : `0${currW}`}`;
// };

// const getResult = (inputs) =>
//   inputs.forEach((input) => console.log(checkHotelRoom(input)));

// getResult(inputs);

const calculateTotal = (input) => {
  const [K, N] = input;

  while (true) {}
};

const getResult = (inputs) => {
  for (let i = 0; i < inputs.length; i++) {
    if (i % 2 === 0) {
      calculateTotal([+inputs[i], +inputs[i + 1]]);
    }
  }
};

console.log(getResult(inputs));
