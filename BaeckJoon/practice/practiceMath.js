"use-strict";

// 손익분기점

function breakEvenFuc(A, B, C) {
  const margin = C - B;
  const breakEvenPoint = Math.floor(A / margin) + 1;
  // +1을 해준 이유는 손익분기점이 아닌 손익분기점을 넘는 수를 구해야하므로
  //   console.log(margin, breakEvenPoint);

  // 손익분기점이 존재하지 않으면 -1을 출력해야한다.
  // 그러므로 margin이 0이면 -1을 출력하고(0이면 손익분기점이 없으니깐), 아니면 breakEvenPoint를 출력한다.
  //   console.log(margin <= 0 ? -1 : breakEvenPoint);
  return breakEvenPoint;
}

breakEvenFuc(1000, 70, 170);

// 육각형 문제

function hexagon(N) {
  // 처음에 방이 1개, 두 번째 범위에서 방이 7개, 세 번째 범위에서 방이 19개, 네 번째 범위에서 37개
  // 1번 방 이후 감싸고 있는 방의 개수는 6개씩 늘어난다. (6, 12, 18 ...)
  let counter = 1;
  let range = 1;

  while (range < N) {
    range += counter * 6;
    counter += 1;
  }
  // console.log(counter);
}

hexagon(58);

// 분수 찾기

// 규칙은 [1/1], [2/1, 1/2], [3/1, 2/2, 1/3], [4/1, 3/2, 2/3, 1/4] ...
// 분자는 내림차순, 분모는 오름차순
function fractionalFunc(X) {
  // counter = 해당 그룹의 분수의 갯수를 말한다.
  let counter = 0;

  // 1/1부터 시작한다고 생각할 때, 해당 그룹의 분수 개수는 1부터 1씩 증가한다.
  // 그룹 개수가 증가할 때마다 입력 받은 X에서 그룹을 빼주면 해당 그룹에 도달했을 때, X는 0 또는 음수가 된다.
  while (X > 0) {
    counter++;
    X -= counter;
  }
  // console.log(X, counter);

  // 분모는 짝수 일때, counter +1 => 오름차순
  // 분자는 짝수 일때, 1 + (-X) => 내림차순
  if (counter % 2 === 0) {
    // console.log(`${counter + X}/${1 + -X}`);
  } else {
    // console.log(`${1 + -X}/${counter + X}`);
  }
}

fractionalFunc(14);

// 달팽이 문제

function snail() {
  // 높이가 5인 막대기에 하루에 2미터 올라가고, 1미터 미끌어진다.
  // 높이에 하루에 미끌어지는 길이를 뺀다.
  const input = [2, 1, 5];

  const A = input[0];
  const B = input[1];
  const V = input[2];

  // console.log((V - B) / (A - B));
}

snail();

// 설탕 문제
// 설탕 공장에서 만드는 설탕은 3kg, 5kg로 나눠진다.
// ex ) 설탕 18kg 나르기 위해서 3kg 6개도 가능하지만, 5kg 3개와 3kg 1개로 나눠서
// 가져간다면 더 적은 봉지를 사용할 수 있다.

const SUGAR = 6;

const BIG_QUANTITY = 5;
const SMALL_QUANTITY = 3;

const sugarDellivery = (aSugar) => {
  let bigCount = 0;
  let smallCount = 0;

  const bigRemain = aSugar % BIG_QUANTITY;

  const smallCount = bigRemain / SMALL_QUANTITY;

  if (bigRemain === 0) {
    bigCount += aSugar / BIG_QUANTITY;
  }

  // 3의 배수면 3개 짜리로만
  if (aSugar % SMALL_QUANTITY === 0) {
    return aSugar / SMALL_QUANTITY;
  }

  if (bigRemain % SMALL_QUANTITY !== 0) {
    return -1;
  }

  return bigCount + smallCount;
};

console.log(sugarDellivery(SUGAR));

// 큰 수 더하기

function BigNumPlus(A, B) {
  const result = A + B;
  console.log(result);
}

BigNumPlus(9223372036854775807, 9223372036854775808);

// Fly me to the Alpha Centauri

function Alpha() {}

Alpha();
