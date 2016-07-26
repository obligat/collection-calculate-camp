'use strict';

function compare_collections(collection_a, collection_b) {
  let result = [];
  for (let i of collection_b) {
    result=collection_a.reduce(function (a, b) {
      if (b === i) {
        return true;
      }
    }, []);
  }
  return result;
}

module.exports = compare_collections;


