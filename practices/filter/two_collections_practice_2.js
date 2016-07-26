'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  let result = [];
  result = collection_a.filter(function (it) {
    return !collection_b.includes(it);
  });

  return result;
}

module.exports = choose_no_common_elements;
