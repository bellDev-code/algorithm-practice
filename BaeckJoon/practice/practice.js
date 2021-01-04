"use-strict";

const array = [20, 10, 35, 30, 7];

// 최대값을 구하는 js 함수
const maxArr = Math.max.apply(null, array);

// 최소값을 구하는 js 함수
const minArr = Math.min.apply(null, array);

console.log(minArr, maxArr);

function solution() {
  let temp = array[0];
  for (let i = 1; i < array.length; i++) {
    // console.log(array[i], temp);
    if (temp < array[i]) {
      temp = array[i];
    }
  }
  console.log(temp);
}

solution();

const newArr = [3, 29, 38, 12, 57, 74, 40, 85, 61];

function newSolution() {
  let temp = newArr[0];
  let length = 0;
  for (let i = 1; i < newArr.length; i++) {
    // console.log(newArr[i], temp);
    if (temp < newArr[i]) {
      temp = newArr[i];
      length = i + 1;
    }
  }
  console.log(temp, length);
}

newSolution();

const numArr = [150, 266, 427];

function seconSolution() {
  let num = numArr[0] * numArr[1] * numArr[2];
  // console.log(num);

  const numStr = num.toString();
  //   console.log(numStr);

  const newNumArr = new Array(9).fill(0);
  //   console.log(newNumArr);
  for (let i = 0; i < numStr.length; i++) {
    const temp = +numStr[i];
    newNumArr[temp] += 1;
  }
  for (const num of newNumArr) {
    console.log(num);
  }
}

seconSolution();