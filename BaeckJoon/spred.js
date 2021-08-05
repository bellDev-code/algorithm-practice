// 10 Powerful Uses of Spread Syntax(…) That You’ll Love

// 1. Copy an Array

let arr = [1, 2, 3, [4, 5]];

// let copy = arr.slice();
let copy = [...arr];

console.log(copy);

// 2. Copy an Object

let user = {
  name: "lee",
  url: "https://www.naver.com",
};

// let copyObject = Object.assign({}, user);
let copyObject = { ...user };

console.log(copyObject);

// 3. Adds elements to the beginning or end of an array

let arr2 = [3];

// arr2.unshift(1, 2);
// arr2.push(4, 5);

let copyArr = [1, 2, ...arr2, 4, 5];

console.log(copyArr);

// 4. Merge arrays

let oneArr = [1, 2, 3];
let twoArr = [4, 5, 6];

// let sumArr = oneArr.concat(twoArr);
let sumArr = [...oneArr, ...twoArr];

console.log(sumArr);

// 5. Merge objects

let p1 = { name: "First" };
let p2 = { tag: "javascript" };

// let p3 = Object.assign({}, p1, p2);
let p3 = { ...p1, ...p2 };

console.log(p3);

// 6. Convert a string to an array

let str = "Ethereum";

// let strArr = str.split("");
let strArr = [...str];

console.log(strArr);

// 7. Convert an array-like object to an array

function sum() {
  console.log(arguments);

  let argArray = [...arguments];

  console.log(argArray instanceof Array);
}

sum(1, 2, 3, 4);

// function foo() {
//   let argArray = Array.from(arguments);
//   console.log(argArray instanceof Array);
// }

// foo();
// true

// 8. Extract Object

let httpOptions = {
  method: "POST",
  url: "https://api.github.com",
  returnType: "json",
  timeout: 2000,
  data: {
    name: "Doge",
  },
};

let { method, url, ...config } = httpOptions;

console.log(httpOptions);

console.log("method: " + method);
console.log("url: " + url);
console.log("config: " + config);

// 9. Functions with infinite parameters

// 매개 변수를 배열로 결합하여 전달해야하는데, 별로 좋은 방법은 아니다.
// function sumFunc(arr) {
//   return arr.reduce((acc, cur) => acc + cur);
// }

// console.log(sumFunc([1, 2, 3, 4]));

// 매개 변수를 배열로 결합하여 전달한 방법
// function sumFunc() {
//   let sumArray = Array.from(arguments);

//   return sumArray.reduce((arr, acc) => arr + acc);
// }

function sumFunc(...arr) {
  return arr.reduce((acc, cur) => acc + cur);
}

console.log(sumFunc(1, 2, 3, 4));
console.log(sumFunc(1, 3, 5, 7));

// 10. Rest Parameters

function team(leader, viceLeader, ...members) {
  console.log("leader: " + leader);
  console.log("vice leader: " + viceLeader);
  members.forEach((member) => console.log("member: " + member));
}

team("Jon", "Jack", "Bob", "Alice");
