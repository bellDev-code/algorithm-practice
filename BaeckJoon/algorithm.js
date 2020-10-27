// 1. 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

function solution(A, B) {
  const result = A + B;
  //   console.log(result);
}

// solution(1, 2);

//2. 두 정수 A와 B를 입력받은 다음, A×B를 출력하는 프로그램을 작성하시오.

function divdeFunc(A, B) {
  const result = A * B;
  //   console.log(result);
}

// divdeFunc(3, 4);

// 3.두 정수 A와 B를 입력받은 다음, A/B를 출력하는 프로그램을 작성하시오.

function diviFunc(A, B) {
  const result = A / B;
  console.log(result);
}

// diviFunc(1, 3);
// diviFunc(4, 5);

// 4. 두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오.

function solution(A, B) {
  const one = A + B;
  const two = A - B;
  const three = A * B;
  const four = A / B;
  const five = A % B;
  //   console.log(one);
  //   console.log(two);
  //   console.log(three);
  //   console.log(Math.floor(four));
  //   console.log(five);
}

// solution(7, 3);

// 5. (A+B)%C는 ((A%C) + (B%C))%C 와 같을까? (A×B)%C는 ((A%C) × (B%C))%C 와 같을까?
// 세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오.

function solution(A, B, C) {
  const one = (A + B) % C;
  //   console.log(one);
  const two = (A % C) + (B % C);
  //   console.log(two);
  const three = (A * B) % C;
  //   console.log(three);
  const four = ((A % C) * (B % C)) % C;
  //   console.log(four);
}

// solution(5, 8, 4);

//
