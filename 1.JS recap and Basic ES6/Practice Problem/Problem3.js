// Write an arrow function where it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements

const Calculate = (Numbers)=>{
    let sum = 0;
    for (const Number of Numbers) {
        sum = sum+Math.pow(Number,2);
    }
    const size_of_array = Numbers.length;
    const average = sum/size_of_array;
    return average;
}

const Numbers = [10, 5,2,5,6,3,1];
const average = Calculate(Numbers);
console.log(average);
