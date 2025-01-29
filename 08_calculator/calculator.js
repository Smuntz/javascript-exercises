const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (numbers) {
  const totalSum = numbers.reduce((accumulator, item) => {
    return accumulator += item;
  }, 0)
  return totalSum;
};

const multiply = function (numbers) {
  const totalSum = numbers.reduce((accumulator, item) => {
    return accumulator = accumulator * item;
  }, 1)
  return totalSum;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  if (num < 0)
    return -1;
  else if (num == 0)
    return 1;
  else {
    return (num * factorial(num - 1));
  }

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
