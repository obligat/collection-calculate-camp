'use strict';
var number_map_to_word = function(collection){
  return collection.map((it)=>String.fromCharCode(96+it));
}

module.exports = number_map_to_word;
