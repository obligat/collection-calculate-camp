'use strict';

function get_integer_interval(number_a, number_b) {
  let result = [];
  if (number_a < number_b) {
    for (let i = number_a; i <= number_b; i++) {
      result.push(i);
    }
  }
  else if (number_a > number_b) {
    for (let i = number_a; i >=number_b; i--) {
      result.push(i);
    }
  }
  else  {
    result.push(number_a);
  }

  return result;
}

module.exports = get_integer_interval;

