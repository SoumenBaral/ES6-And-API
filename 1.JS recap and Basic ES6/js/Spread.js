const max = Math.max(12,22,3,343,222,1234);
// console.log(max);
const numbers = [12,22,3,343,222,12];
const newNumber = [...numbers];
// console.log(newNumber);

const largest = Math.max(...newNumber);
// console.log(largest); 
const number2 = numbers;
const number3 = [100 ,...numbers,45,34,100]
numbers.push(210);
// console.log(newNumber);
// console.log(numbers);
// console.log(number2);
console.log(number3);