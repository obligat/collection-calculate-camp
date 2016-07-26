'use strict';

function get_intersection(collection_a, collection_b) {
    
  let result=[];
    for(let i of collection_b){
       let exist= collection_a.find(function (item) {
            return item===i; });
        if(exist){
            result.push(i);
        }
    }
    return result; 
 //在这里写入代码
}

module.exports = get_intersection;
