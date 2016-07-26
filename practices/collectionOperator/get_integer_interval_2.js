'use strict';

function get_integer_interval_2(number_a, number_b) {
    let result=[];
    let arr=[number_a,number_b];
   result=arr.reduce(function (a,b) {
        let c=[];
       if(a<b){
          c.push(2);
       }
       else  if(a>b){
           c=c-2;
       }
       else  if(a===b&&a/2===0){
           c=a;
       }
       else {

       }
       return c;
   });
    return result;
}

module.exports = get_integer_interval_2;
