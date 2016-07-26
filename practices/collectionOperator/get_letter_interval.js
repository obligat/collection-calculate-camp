'use strict'

function get_letter_interval(number_a, number_b) {
  let result=[];
  if(number_a<number_b){
    for(let i=number_a;i<=number_b;i++){
      result.push(String.fromCharCode(64+32+i));
    }
  }
  else if(number_a>number_b){
    for(let i=number_a;i>=number_b;i--){
      result.push(String.fromCharCode(64+32+i));
    }
  }
  else {
    result.push(String.fromCharCode(64+32+number_a));
  }
  return result;
}

module.exports = get_letter_interval;
