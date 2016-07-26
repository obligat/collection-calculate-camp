'use strict';

function get_integer_interval_2(number_a, number_b) {
    let result = [];

    function compare(a, b) {
        let arr = [a, b];
        if (arr[1] < arr[0]) {
            arr[0] = b;
            arr[1] = a;
        }
        return arr;
    }

    let arr = compare(number_a, number_b);
    let a=0;
    let length = Math.ceil((arr[1] - arr[0]) / 2);
    if (number_a <number_b) {
        for (let i = 0; i < length; i++) {
            result.push(a = a + 2);
        }
    }
       else  if(number_a>number_b){
        for (let i = 0; i < length; i++) {
            result.push(a = a + 2);
        }
        result=result.reverse();
    }
    else if (number_a === number_b&& number_a %2 === 0) {
        result.push(number_a);
    }
    return result;
}

module.exports = get_integer_interval_2;
