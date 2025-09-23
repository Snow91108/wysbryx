function calculate(a, b, callback){
    return callback(a,b)
}
function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
console.log(calculate(5,6, sum));
console.log(calculate(6,7, sub));