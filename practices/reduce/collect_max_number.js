'use strict';

function collect_max_number(collection) {

  return collection.reduce(function (a, b) {
    let max = a;
    if (a < b) {
      max = b;
    }
    return max;
  });
}

module.exports = collect_max_number;
