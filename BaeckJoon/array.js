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

// const array = [3, 29, 38, 12, 57, 74, 40, 85, 61];

// function solution() {
//   let temp = array[0];
//   let length = 0;
//   //   console.log(temp);
//   for (let i = 1; i < 9; i++) {
//     if (temp < array[i]) {
//       temp = array[i];
//       length = i + 1;
//     }
//   }
//   console.log(temp, length);
// }

// solution();

// 3. 세 개의 자연수 A, B, C가 주어질 때 A×B×C를 계산한 결과에 0부터 9까지 각각의 숫자가 몇 번씩 쓰였는지를 구하는 프로그램을 작성하시오.

// 예를 들어 A = 150, B = 266, C = 427 이라면

// A × B × C = 150 × 266 × 427 = 17037300 이 되고,

// 계산한 결과 17037300 에는 0이 3번, 1이 1번, 3이 2번, 7이 2번 쓰였다.

// const array = [150, 266, 427];

// function solution() {
//   let num = String(array[0] * array[1] * array[2]);
//   console.log(num);
//   for (let i = 0; i <= 9; i++) {
//     let count = 0;
//     for (let j = 0; j < num.length; j++) {
//       if (Number(num[j]) === i) {
//         count++;
//       }
//     }
//     console.log(count);
//   }
// }

// 4. 두 자연수 A와 B가 있을 때, A%B는 A를 B로 나눈 나머지 이다. 예를 들어, 7, 14, 27, 38을 3으로 나눈 나머지는 1, 2, 0, 2이다.

// 수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다. 그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.

// const array = [39, 40, 41, 42, 43, 44, 82, 83, 84, 85];

// function solution() {
//   for (let i = 0; i < array.length; i++) {
//     let num = array[i] % 42;
//     console.log(num);
//   }
// }

// solution();

// solution();
// 알람시계 문제

// function solution(H, M) {
//   if (M - 45 < 0) {
//     M = 60 + (M - 45);
//     H -= 1;
//     if (H === -1) {
//       H = 23;
//     }
//   } else {
//     M -= 45;
//   }
//   console.log(H + " " + M);
// }

// solution(10, 10);
// solution(9, 25);
// solution(0, 30);
// solution(23, 40);
