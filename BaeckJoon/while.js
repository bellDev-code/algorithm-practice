// 1. 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
// function solution(A, B) {
//   while (A > 0 && B < 10) {
//     const result = A + B;
//     // console.log(result);
//     break;
//   }
// }

// solution(1, 1);
// solution(2, 3);
// solution(3, 4);
// solution(9, 8);
// solution(5, 2);
// solution(0, 0);

// 2. 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

// function solution(A, B) {
//   while (A > 0 && B < 10) {
//     const plus = A + B;
//     // console.log(plus);
//     break;
//   }
// }

// solution(1, 1);
// solution(2, 3);
// solution(3, 4);
// solution(9, 8);
// solution(5, 2);

// 못풀겠음

// function solution(A, B) {
//   let count = 0;
//   while (count < 10) {
//     // 입력 함수 호출
//     // 더해서 출력
//     if (A > 0 && B < 10) {
//       const result = A + B;
//       console.log(result);
//     } else {
//       break;
//     }
//     count += 1;
//   }
// }

// //문자열
// const x2 = "26";
// console.log(x2[0]);

// const x = 26;
// // 앞자리수
// console.log(Math.floor(x / 10));
// // 뒷자리수
// console.log(x % 10);

// const test = "150";
// console.log(test[0]);

// 3. 0보다 크거나 같고, 99보다 작거나 같은 정수가 주어질 때 다음과 같은 연산을 할 수 있다.

// 먼저 주어진 수가 10보다 작다면 앞에 0을 붙여 두 자리 수로 만들고,

//각 자리의 숫자를 더한다. 그 다음, 주어진 수의 가장 오른쪽 자리 수와 앞에서 구한 합의 가장

// 오른쪽 자리 수를 이어 붙이면 새로운 수를 만들 수 있다. 다음 예를 보자.

// 26부터 시작한다. 2+6 = 8이다. 새로운 수는 68이다. 6+8 = 14이다.

// 새로운 수는 84이다. 8+4 = 12이다. 새로운 수는 42이다. 4+2 = 6이다. 새로운 수는 26이다.

// 위의 예는 4번만에 원래 수로 돌아올 수 있다. 따라서 26의 사이클의 길이는 4이다.

// 입력 : N이 주어졌을 때, N의 사이클의 길이를 구하는 프로그램을 작성하시오.
