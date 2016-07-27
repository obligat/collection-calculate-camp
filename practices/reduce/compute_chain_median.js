'use strict';

function compute_chain_median(collection) {
  let arr = collection.split("->");

  function asc(a, b) {
    return a - b;
  }

  arr = arr.sort(asc);
  let middle = (parseInt(arr[arr.length / 2 - 1]) + parseInt(arr[arr.length / 2])) / 2;
  return middle;
}

module.exports = compute_chain_median;
