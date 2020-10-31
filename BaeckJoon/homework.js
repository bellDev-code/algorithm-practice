"use-strict";

// 1.두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.
//첫째 줄에 다음 세 가지 중 하나를 출력한다.

// A가 B보다 큰 경우에는 '>'를 출력한다.
// A가 B보다 작은 경우에는 '<'를 출력한다.
// A와 B가 같은 경우에는 '=='를 출력한다.

function solution(A, B) {
  if (A > B) {
    // console.log(">");
  } else if (A < B) {
    // console.log("<");
  } else {
    // console.log("==");
  }
}

// solution(1, 2);
// solution(10, 2);
// solution(5, 5);

// 2. 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B,
// 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

function testScore(score) {
  if (score >= 90 && score <= 100) {
    // console.log("A");
  } else if (score >= 80 && score <= 89) {
    // console.log("B");
  } else if (score >= 70 && score <= 79) {
    // console.log("C");
  } else if (score >= 60 && score <= 69) {
    // console.log("D");
  } else {
    // console.log("F");
  }
}

// testScore(100);

// 3. 4분면 구하기

function solution(x, y) {
  if (x > 0 && y > 0) {
    // console.log(1);
  } else if (x < 0 && y > 0) {
    // console.log(2);
  } else if (x < 0 && y < 0) {
    // console.log(3);
  } else if (x > 0 && y < 0) {
    // console.log(4);
  }
}

// solution(12, 5);
// solution(9, -13);

// 4. 알람 시계 => 모르겠다

function time(H, M) {}

// for문 활용

// 1. 구구단
function nineninedan(N) {
  for (let i = 1; i <= 9; i++) {
    const result = N * i;
    // console.log(result);
  }
}

nineninedan(2);

// 2. 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오. => 문제 이해 실패
// 첫째 줄에 테스트 케이스의 개수 T가 주어진다.
// 각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

// 3. n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.
function solution(n) {
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    sum += i;
    console.log(i);
  }
}
solution(3);

// 별 찍기 - 1

function starFunc(len) {
  const star = "*";
  for (let i = 0; i <= len; i++) {
    // console.log(star.repeat(i));
  }
}

starFunc(5);

// 별 찍기 - 2

// X 보다 작은 수
