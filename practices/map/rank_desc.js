'use strict';
var rank_desc = function(collection){
  function a(a,b) {
    return a-b;
  }
  return collection.sort(a);
};

module.exports = rank_desc;
