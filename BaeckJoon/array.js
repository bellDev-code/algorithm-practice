"use-strict";

// 1. N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

// 입력 : 첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다.

// 모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.

function solution() {
  let max = 0;
  let min = 0;
}

// 2. 9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.

// 예를 들어, 서로 다른 9개의 자연수

// 3, 29, 38, 12, 57, 74, 40, 85, 61

// 이 주어지면, 이들 중 최댓값은 85이고, 이 값은 8번째 수이다.

// function solution() {
//   let max = 0;
//   const array = [3, 29, 38, 12, 57, 74, 40, 85, 61];
//   for (let i = 0; i < array.length; i++) {
//     console.log(array.length);
//     break;
//   }
// }

// solution();

// 알람시계 문제

function solution(H, M) {
  if (M - 45 < 0) {
    M = 60 + (M - 45);
    H -= 1;
    if (H === -1) {
      H = 23;
    }
  } else {
    M -= 45;
  }
  console.log(H + " " + M);
}

solution(10, 10);
solution(9, 25);
solution(0, 30);
solution(23, 40);
