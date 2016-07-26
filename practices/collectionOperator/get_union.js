'use strict';

function get_union(collection_a, collection_b) {
    let result = [];
    for (let i of collection_b) {
        let exist = collection_a.find(function (item) {
            return item === i;
        });
        if (!exist) {
            result.push(i);
        }
    }
    return result;
}


module.exports = get_union;

