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
  // console.log(result);
}

const num = 3;
const str = "ABC";

let repetition = "";

for (const char of str) {
  for (let i = 0; i < num; i++) {
    repetition += char;
  }
}

// console.log(repetition);

const input = "Mississipi";
const charMap = {};

for (const char of input.toLowerCase()) {
  charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
  // console.log(char);
  // console.log(charMap[char]);
}

let max = Math.max.apply(null, Object.values(charMap));
// console.log(max);
let maxChar = "";
let counter = 0;

for (const char in charMap) {
  if (charMap[char] === max) {
    maxChar = char;
    counter++;
  }
  if (counter > 1) {
    // console.log("?");
    // return;
  }
}

// console.log(maxChar.toUpperCase());

const sentence = "The Curious Case of Benjamin Button";
const word = sentence.trim().split(" ");
// console.log(word);

if (sentence[0] === " ") {
  console.log(0);
} else {
  console.log(word.length);
}

// const score = "734 893";
// const newScore = score.split(" ").reduce((item, index) => index + item, " ");

// console.log(newScore);

// const newSentence = newScore.split(" ");
// console.log(newSentence);
// const newData = Math.max.apply(null, newSentence);

// console.log(newData);
