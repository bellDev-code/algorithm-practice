"use-strict";

// 1. 알파벳 소문자, 대문자, 숫자 0-9중 하나가 주어졌을 때, 주어진 글자의 아스키 코드값을 출력하는 프로그램을 작성하시오.

// 알파벳 소문자, 대문자, 숫자 0-9중 하나가 주어졌을 때, 주어진 글자의 아스키 코드값을 출력하는 프로그램을 작성하시오.

// const string = "A";
// console.log(string.charCodeAt(0));

// 2. N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.

// let input = ["5", "54321"];
// let sum = 0;

// for (const num of input[1]) {
//   sum += parseInt(num);
// }
// console.log(sum);

// 3. 알파벳 소문자로만 이루어진 단어 S가 주어진다. 각각의 알파벳에 대해서, 단어에 포함되어 있는 경우에는 처음 등장하는 위치를,

// 포함되어 있지 않은 경우에는 -1을 출력하는 프로그램을 작성하시오.

// const chars = [];

// for (let i = 97; i < 123; i++) {
//   chars.push(i);
// }
// const compare = "baekjoon";

// const result = new Array(chars.length).fill(-1);

// for (let i = 0; i < compare.length; i++) {
//   const ascii = compare[i].charCodeAt(0);
//   const foundIndex = chars.findIndex((char) => char === ascii);
//   result[foundIndex] = i;
// }

// 4. 문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오.

// 즉, 첫 번째 문자를 R번 반복하고,

// 두 번째 문자를 R번 반복하는 식으로 P를 만들면 된다. S에는 QR Code "alphanumeric" 문자만 들어있다.

// const num = 5;
// const str = "/HTP";

// let result = "";

// for (const char of str) {
//   for (let i = 0; i < num; i++) {
//     result += char;
//   }
// }

// console.log(result);

// 5. 알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오.

// 단, 대문자와 소문자를 구분하지 않는다.

// 6. 영어 대소문자와 띄어쓰기만으로 이루어진 문자열이 주어진다. 이 문자열에는 몇 개의 단어가 있을까? 이를 구하는 프로그램을 작성하시오.

// 단, 한 단어가 여러 번 등장하면 등장한 횟수만큼 모두 세어야 한다.

const word = "The Curious Case of Benjamin Button";
const space = " ";

// 7. 상근이의 동생 상수는 수학을 정말 못한다. 상수는 숫자를 읽는데 문제가 있다.

// 이렇게 수학을 못하는 상수를 위해서 상근이는 수의 크기를 비교하는 문제를 내주었다.

// 상근이는 세 자리 수 두 개를 칠판에 써주었다. 그 다음에 크기가 큰 수를 말해보라고 했다.

// 상수는 수를 다른 사람과 다르게 거꾸로 읽는다. 예를 들어, 734와 893을 칠판에 적었다면,

// 상수는 이 수를 437과 398로 읽는다. 따라서, 상수는 두 수중 큰 수인 437을 큰 수라고 말할 것이다.

// 두 수가 주어졌을 때, 상수의 대답을 출력하는 프로그램을 작성하시오.
