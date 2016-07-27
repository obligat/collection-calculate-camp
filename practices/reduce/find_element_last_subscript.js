'use strict';

function calculate_elements_sum(collection, element) {
  return collection.reverse().find((it)=>indexOf(it===element));
}

module.exports = calculate_elements_sum;
