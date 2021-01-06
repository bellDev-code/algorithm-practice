"use-strict";

const ascii = "B".charCodeAt(0);

// console.log(ascii);

// asciiCode를 이용한 알파벳 찾기
const chars = [];

for (let i = 97; i < 123; i++) {
  chars.push(i);
}

const compare = "baekjoon";

const result = new Array(chars.length).fill(-1);
// console.log(result);

for (let i = 0; i < compare.length; i++) {
  const asciiCode = compare[i].charCodeAt(0);
  const index = chars.findIndex((char) => char === asciiCode);
  result[index] = i;
  console.log(result);
}

const num = 3;
const str = "ABC";

let repetition = "";

for (const char of str) {
  for (let i = 0; i < num; i++) {
    repetition += char;
  }
}

console.log(repetition);
