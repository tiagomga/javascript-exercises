const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let total = 0;
	for (let num of array) {
    total += num;
  }
  return total;
};

const multiply = function(array) {
  let total = 1;
	for (let num of array) {
    total *= num;
  }
  return total;
};

const power = function(base, exp) {
	return base ** exp;
};

const factorial = function(a) {
  if (a == 0) {
    return 1;
  } else {
    return a * factorial(a-1);
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
