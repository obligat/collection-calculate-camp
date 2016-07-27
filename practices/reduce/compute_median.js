'use strict';

function compute_median(collection) {
  function asc(a,b) {
    return a-b;
  }
  collection=collection.sort(asc);
  let leng = collection.length;
  let middle = 0;
  if (leng % 2 !== 0) {
    middle = parseFloat(collection[(leng -1)/ 2]);
  }
  else {
    middle = (parseFloat(collection[leng / 2 - 1]) + parseFloat(collection[leng / 2])) / 2;
  }
  return middle;
}

module.exports = compute_median;


