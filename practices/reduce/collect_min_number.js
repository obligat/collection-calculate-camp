'use strict';

function collect_min_number(collection) {
  return collection.reduce(function (a, b) {
    let min = a;
    if (a > b) {
      min = b;
    }
    return min;
  });
}

module.exports = collect_min_number;

