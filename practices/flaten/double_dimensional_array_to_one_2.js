'use strict';

function double_to_one(collection) {
  let oneArr = [];
  for (let i of collection) {
    oneArr = oneArr.concat(i);
  }
  let set = new Set(oneArr);
  return Array.from(set);
}
module.exports = double_to_one;
