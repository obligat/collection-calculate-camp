'use strict';
var number_map_to_word_over_26 = function(collection){
  return collection.map(function (it) {
    if(it<=26){
      it=String.fromCharCode(96+it);
    }
    else if(it%26===0){
     let a=String.fromCharCode(96+it/26-1);
      it=a.concat('z');
    }
    else if(it%26!==0){
      let a=String.fromCharCode(96+it/26);
      it=a.concat(String.fromCharCode(96+it%26));
    }
    return it;
  });
};

module.exports = number_map_to_word_over_26;
