'use strict';

function choose_even(collection) {
    return collection.filter(function (num) {
            return num % 2 === 0;
        }
    );
}
module.exports = choose_even;
