'use strict';

function double_to_one(collection) {
  let result=[];
  for(let i of collection){
    result=result.concat(i);
  }
  return result;
}

module.exports = double_to_one;
