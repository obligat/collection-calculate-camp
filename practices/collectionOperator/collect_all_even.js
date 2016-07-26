'use strict';

function collect_all_even(collection) {
  let result=[];
  result=collection.filter(function (item) {
    if(item%2===0){
      return item;
    }
  });
  return result;
}



module.exports = collect_all_even;
