
'use strict';

function grouping_count(collection) {
    let obj;
    let arr=[];
    obj=Object(obj);
    let a=0;
    arr=Array.from(new Set(collection));
    for (let j of arr){
        a=0;
        for (let i=0;i<collection.length;i++){
            if (j===collection[i]){
                obj[j]=++a;
            }
        }
    }
    return obj;
}




module.exports = grouping_count;
