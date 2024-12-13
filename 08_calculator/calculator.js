const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	const summedArray = array.reduce((total, item) => {
    return total + item;
  }, 0);
  return summedArray;
};

const multiply = function(array) {
  return array.reduce((multiplied, item) => multiplied * item);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
	const numberedArray  = [];
  if (number === 0) {
    return 1;
  } else {
    for (let i = 1; i <= number; i++) {
      if (i <= number) {
        numberedArray.push(i);
      };
    };
  };
  return numberedArray.reduce((calculation, item) => {
    return calculation * item;
  });
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
