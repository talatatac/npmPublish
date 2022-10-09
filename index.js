function isEmpty(x){
 return [null, NaN, undefined, [], {}, "", false, 0].indexOf(x) > -1
} 

module.exports = isEmpty