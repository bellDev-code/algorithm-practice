let left = 3;

let right = 6;

function addFunc(num) {
  answer = 0;
  for (let i = 0; i < 10; i++) {
    answer = answer + num;
  }
  return answer;
}

const foo = addFunc(left);

console.log(foo);
