"use-strict";

// 손익분기점

function breakEvenFuc(A, B, C) {
  const margin = C - B;
  const breakEvenPoint = Math.floor(A / margin) + 1;
  // +1을 해준 이유는 손익분기점이 아닌 손익분기점을 넘는 수를 구해야하므로
  //   console.log(margin, breakEvenPoint);

  // 손익분기점이 존재하지 않으면 -1을 출력해야한다.
  // 그러므로 margin이 0이면 -1을 출력하고, 아니면 breakEvenPoint를 출력한다.
  console.log(margin <= 0 ? -1 : breakEvenPoint);
}

breakEvenFuc(1000, 70, 170);

// 육각형 문제
//
function hexagon(N) {}

hexagon();
