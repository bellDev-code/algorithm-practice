"use-strict";

// 1.두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.
//첫째 줄에 다음 세 가지 중 하나를 출력한다.

// A가 B보다 큰 경우에는 '>'를 출력한다.
// A가 B보다 작은 경우에는 '<'를 출력한다.
// A와 B가 같은 경우에는 '=='를 출력한다.

// function solution(A, B) {
//   if (A > B) {
//     // console.log(">");
//   } else if (A < B) {
//     // console.log("<");
//   } else {
//     // console.log("==");
//   }
// }

// solution(1, 2);
// solution(10, 2);
// solution(5, 5);

// 2. 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B,
// 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

// function testScore(score) {
//   if (score >= 90) {
//     console.log("A");
//   } else if (score >= 80) {
//     console.log("B");
//   } else if (score >= 70) {
//     console.log("C");
//   } else if (score >= 60) {
//     console.log("D");
//   } else {
//     console.log("F");
//   }
// }

// testScore(60);

// 3. 4분면 구하기

// function solution(x, y) {
//   if (x > 0 && y > 0) {
//     console.log(1);
//   } else if (x < 0 && y > 0) {
//     console.log(2);
//   } else if (x < 0 && y < 0) {
//     console.log(3);
//   } else if (x > 0 && y < 0) {
//     console.log(4);
//   }
// }

// solution(12, 5);
// solution(-9, -13);

// 4. 알람 시계 => 모르겠다 => 다시 풀어보기

// function time(H, M) {}

// for문 활용

// 1. 구구단
// function nineninedan(N) {
//   for (let i = 1; i <= 9; i++) {
//     const result = N * i;
//     // console.log(result);
//   }
// }

// nineninedan(2);

// 2. 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오. => 문제 이해 실패
// 첫째 줄에 테스트 케이스의 개수 T가 주어진다.
// 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

// 3. n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.
// function solution(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   console.log(sum);
// }
// solution(10);

// 별 찍기 - 1

// function starFunc(len) {
//   const star = "*";
//   for (let i = 0; i <= len; i++) {
//     console.log(star.repeat(i));
//   }
// }

// starFunc(5);

// 별 찍기 - 2

const star = (n) => {
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      str += " ";
    }
    for (let z = 0; z < i; z++) {
      str += "*";
    }
    console.log(str);
    str = "";
  }
};

star(6);

// X 보다 작은 수

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

("use-strict");

// const array = ["a", "b", "c", "d"];

// // 1. 'a, b, c, d' 형태의 문자열 만들기

// const stringArray = array.toString();
// console.log(stringArray);

// 2. array의 길이가 홀수인지 짝수인지 알려주는 함수
// const newArray = (array) => {
//   const len = array.length;
//   if (len % 2 === 0) {
//     return true;
//   } else if (len % 2 === 1) {
//     return false;
//   }
// };

// console.log(newArray([0, 1, 2, 3]));

// 3. 소수 구하는 함수 func(정수): true false   소수면 true 아니면 false => 이해 못함
// const numberFunc = (num) => {
//   // 위에서 제외할거 제외하자
//   if (num === 1) {
//     return false;
//   }
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(numberFunc(17));

// 4. 윤년 구하기

// const yoonYear = (year) => {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return console.log("윤년");
//   } else {
//     return console.log("평년");
//   }
// };

// yoonYear(1999);
// yoonYear(2000);
// yoonYear(2004);
// yoonYear(2400);

// 4. 윤년 구하기 (가독성 좋게)

// const newYoonYear = (year) => {
//   if (year % 4 === 0) {
//     if (year % 100 > 0) {
//       console.log("윤년");
//     } else if (year % 400 === 0) {
//       console.log("윤년");
//     } else {
//       console.log("평년");
//     }
//   } else {
//     console.log("평년");
//   }
// };

// newYoonYear(1900);

// 5.
// const startArray = ["*", "**", "***", "****", "*****"];

// const starFunc = () => {
//   for (let i = 0; i < 5; i++) {
//     const star = startArray[i];
//     console.log(star);
//   }
//   for (let i = 3; i >= 0; i--) {
//     const star = startArray[i];
//     console.log(star);
//   }
// };

// starFunc();

// function starFunc(len) {
//   const star = "*";
//   for (let i = 0; i <= len; i++) {
//     console.log(star.repeat(i));
//   }
//   for (let i = len - 1; i > 0; i--) {
//     console.log(star.repeat(i));
//   }
// }
// starFunc(5);
// 6.두 배열을 인수로 받아 비교하여
// 서로 포함하는 값만 추출한 배열을
// 반환하는 함수 만들기

// const array = [0, 1, 2, 3];
// const array2 = [0, 2, 6, 8];

// const arrayFunc = () => {};

// arrayFunc();
