'use strict';

function choose_common_elements(collection_a, collection_b) {

    let result=[];
      collection_a.filter(function (a) {
          collection_b.filter(function (b) {
              if(a===b){
                  result.push(b);
              }
          });
      });
    return result;
}

module.exports = choose_common_elements;
