// map, forEach, filter, find, reduce
const numbers = [1, 2, 3, 4, 5];
// const total = numbers.reduce(callback function,initial value)

const total = numbers.reduce((previous,current)=>{
    console.log(previous,current);
    return previous+current;
},0)
console.log(total);
