'use strict';

function find_last_even(collection) {
  return collection.reverse().find((it)=>it%2===0);
  
}

module.exports = find_last_even;
