"use-strict";

const input = ["4", "1 3 5 7"];
const num = parseInt(input.shift());
const numbers = input
  .shift()
  .split(" ")
  .map((num) => parseInt(num));
let counter = 0;

function minority(n) {
  if (n < 2) {
    return;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return;
    }
  }
  counter++;
}

for (let i = 0; i < num; i++) {
  minority(numbers[i]);
}
console.log(counter);

minorityFunc();

const range = ["64", "65"];
const primeNumArr = [];
let primeNumSum = 0;

function rangeMinority(n) {
  if (n < 2) {
    return;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return;
    }
  }
}
