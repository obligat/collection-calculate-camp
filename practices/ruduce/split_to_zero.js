'use strict';

function spilt_to_zero(number, interval) {
  let result = [number];
  for(let i=0;i<number/interval;i=number){
    number=parseFloat((number-interval).toFixed(1));
    result.push(number);
  }
  return result;
}

module.exports = spilt_to_zero;
