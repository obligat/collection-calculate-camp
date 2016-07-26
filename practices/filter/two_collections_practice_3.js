'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  let result=[];

    collection_a.filter(function (item) {
      collection_b.filter(function (b) {
        if(item%b===0){
          result.push(item);
        }
      });
    });
 return result;
}

module.exports = choose_divisible_integer;
