'use strict';

function get_letter_interval_2(number_a, number_b) {

    let result = [];
    if (number_a < number_b) {
        for (let i = number_a; i <= number_b; i++) {
            if (i <= 26) {
                let a = String.fromCharCode(64 + 32 + i);
                result.push(a);
            } else {
                if (i % 26 === 0) {
                    let a = String.fromCharCode(64 + 32 + i / 26 - 1);
                    a += "z";
                    result.push(a);
                } else {
                    let a = String.fromCharCode(64 + 32 + i / 26);
                    a += String.fromCharCode(64 + 32 + i % 26);
                    result.push(a);
                }
            }
        }
    }
    else if (number_a > number_b) {
        for (let i = number_a; i >= number_b; i--) {
            if (i <= 26) {
                let a = String.fromCharCode(64 + 32 + i);
                result.push(a);
            } else {
                if (i % 26 === 0) {
                    let a = String.fromCharCode(64 + 32 + i / 26 - 1);
                    a += "z";
                    result.push(a);
                } else {
                    let a = String.fromCharCode(64 + 32 + i / 26);
                    a += String.fromCharCode(64 + 32 + i % 26);
                    result.push(a);
                }
            }
        }
    }
    else  {
        if(number_a<=26){
            let a = String.fromCharCode(64 + 32 + number_a);
            result.push(a);
        }
        else {
            if (number_a % 26 === 0) {
                let a = String.fromCharCode(64 + 32 + number_a / 26 - 1);
                a += "z";
                result.push(a);
            } else {
                let a = String.fromCharCode(64 + 32 + number_a / 26);
                a += String.fromCharCode(64 + 32 + number_a % 26);
                result.push(a);
            }

        }
    }
    return result;

}

module.exports = get_letter_interval_2;

