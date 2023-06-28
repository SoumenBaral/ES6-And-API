const numbers = [2, 8, 4, 6, 3];
function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return output;
}

function doubleItOld(num){
    return num * 2;
}
const doubleIt = num=>num*2;
const makeDouble = numbers.map(doubleIt)
const makeDoubleDirect = numbers.map(num=>num*2);
const makeDoubleDirectShort = numbers.map(x=>x*2);


const fiveTimes = [1,2,3,4,5].map(x=>x*5);
const result = getDoubles(numbers);
console.log(result);
console.log(makeDouble);
console.log(makeDoubleDirect);
console.log(makeDoubleDirectShort);
console.log(fiveTimes);

