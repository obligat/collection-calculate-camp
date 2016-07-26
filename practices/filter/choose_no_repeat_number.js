'use strict';

function choose_no_repeat_number(collection) {
    let set=new Set(collection);
    return Array.from(set);
}

module.exports = choose_no_repeat_number;
