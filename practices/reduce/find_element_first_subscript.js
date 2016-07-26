'use strict';

function calculate_elements_sum(collection, element) {
  return collection.find((it)=>it===collection[element]);
}

module.exports = calculate_elements_sum;

