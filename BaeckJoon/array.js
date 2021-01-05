"use-strict";

// 1. N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

// 입력 : 첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다.

// 모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.

// const array = [20, 10, 35, 30, 7];

// function solution() {
//   let temp = array[0];
//   for (let i = 1; i < array.length; i++) {
//     console.log(array[i], temp);
//     if (temp < array[i]) {
//       temp = array[i];
//     }
//   }
//   console.log(temp);
// }

// solution();

// function test() {
//   let temp = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (temp > array[i]) {
//       temp = array[i];
//     }
//   }
//   console.log(temp);
// }
// test();
// const array = [20, 10, 35, 30, 7];
// const min = Math.min.apply(null, array);
// console.log(min);
// min(a, b, c)
// [a, b, c]

// 2. 9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.

// 예를 들어, 서로 다른 9개의 자연수

// 3, 29, 38, 12, 57, 74, 40, 85, 61

// 이 주어지면, 이들 중 최댓값은 85이고, 이 값은 8번째 수이다.

// const array = [4, 29, 99, 12, 57, 74, 40, 85, 61, 100];

function solution() {
  let temp = array[0];
  let length = 0;
  //   console.log(temp);
  for (let i = 1; i < array.length; i++) {
    if (temp < array[i]) {
      temp = array[i];
      length = i + 1;
    }
  }
  console.log(temp, length);
}

solution();

// 3. 세 개의 자연수 A, B, C가 주어질 때 A×B×C를 계산한 결과에 0부터 9까지 각각의 숫자가 몇 번씩 쓰였는지를 구하는 프로그램을 작성하시오.

// 예를 들어 A = 150, B = 266, C = 427 이라면

// A × B × C = 150 × 266 × 427 = 17037300 이 되고,

// 계산한 결과 17037300 에는 0이 3번, 1이 1번, 3이 2번, 7이 2번 쓰였다.

// const array = [150, 266, 427];

// function solution() {
//   let num = array[0] * array[1] * array[2];
//   const numStr = num.toString();

//   const numArray = new Array(9).fill(0);

//   for (let i = 0; i < numStr.length; i++) {
//     const temp = +numStr[i];
//     numArray[temp] += 1;
//   }

//   for (const num of numArray) {
//     console.log(num);
//   }
// }
// solution();
// 4. 두 자연수 A와 B가 있을 때, A%B는 A를 B로 나눈 나머지 이다. 예를 들어, 7, 14, 27, 38을 3으로 나눈 나머지는 1, 2, 0, 2이다.

// 수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다. 그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.

// const array = [39, 40, 41, 42, 43, 44, 82, 83, 84, 85];

// function solution() {
//   const newSet = new Set();

//   for (let i = 0; i < array.length; i++) {
//     let num = array[i] % 42;
//     newSet.add(num);
//   }
//   console.log(Array.from(newSet).length);
// }

// solution();

// 5. 세준이는 기말고사를 망쳤다. 세준이는 점수를 조작해서 집에 가져가기로 했다. 일단 세준이는 자기 점수 중에 최댓값을 골랐다.

// 이 값을 M이라고 한다. 그리고 나서 모든 점수를 점수/M*100으로 고쳤다.

// 예를 들어, 세준이의 최고점이 70이고, 수학점수가 50이었으면 수학점수는 50/70*100이 되어 71.43점이 된다.

// 세준이의 성적을 위의 방법대로 새로 계산했을 때, 새로운 평균을 구하는 프로그램을 작성하시오.

// => 모르겠음

// 6. "OOXXOXXOOO"와 같은 OX퀴즈의 결과가 있다. O는 문제를 맞은 것이고, X는 문제를 틀린 것이다.

// 문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다. 예를 들어, 10번 문제의 점수는 3이 된다.

// "OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.

// OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성하시오.

const test = [
  "5",
  "OOXXOXXOOO",
  "OOXXOOXXOO",
  "OXOXOXOXOXOXOX",
  "OOOOOOOOOO",
  "OOOOXOOOOXOOOOX",
];

function oxquize() {
  const N = parseInt(test[0]);
  for (let i = 0; i <= N; i++) {
    let count = 1;
    let eachSum = 0;
    for (let j = 0; j < test[i].length; j++) {
      if (test[i][j] === "O") {
        eachSum += count;
        count++;
      } else {
        count = 1;
      }
    }
    console.log(eachSum);
  }
}

oxquize();

// 7. 대학생 새내기들의 90%는 자신이 반에서 평균은 넘는다고 생각한다.

// 당신은 그들에게 슬픈 진실을 알려줘야 한다.

//첫째 줄에는 테스트 케이스의 개수 C가 주어진다.

// 둘째 줄부터 각 테스트 케이스마다 학생의 수 N(1 ≤ N ≤ 1000, N은 정수)이 첫 수로 주어지고, 이어서 N명의 점수가 주어진다.

// 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.

// function solution() {}

// function solution(array) {
//   let avg = 0;

//   for (const num of array) {
//     avg += num;
//   }

//   avg /= array.length;

//   let count = 0;
//   for (const num of array) {
//     if (avg < num) {
//       count++;
//     }
//   }

//   return (count / array.length) * 100;
// }

// const array = [100, 95, 90, 80, 70, 60, 50];
// console.log(solution(array));

// const num = 55;

// function solution(num) {
//   let count = 0;
//   let compareNum = num;

//   while (true) {
//     count += 1;
//     const a = Math.floor(compareNum / 10);
//     const b = compareNum % 10;

//     const sum = a + b;
//     const strSum = `${b}${sum % 10}`;
//     if (+strSum === num) {
//       break;
//     }
//     compareNum = +strSum;
//   }
//   return count;
// }

// const count = solution(num);
// console.log(count);
