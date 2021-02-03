"use-strict";

const minorityFunc = () => {
  const input = "1, 3, 5, 7";
  console.log(input);
  const numbers = input.split(" ").map((num) => parseInt(num));
  console.log(numbers);
};

minorityFunc();
