// Write an arrow function where it will do the following:
// a) It will take two array inputs
// b) Combine the two arrays and assign them in a new array
// c) Find the maximum number from the new array and return the
// result
const findMaxNumber = (array1, array2)=>{
    const NewArray = [...array1, ...array2];
    const MAX = Math.max(...NewArray);
    return MAX;
}

const array1 = [1, 5, 3,34,54,9,392,321,909];
const array2 = [10, 7, 8, 60,56 ,87];

const maxNumber = findMaxNumber(array1, array2);
console.log(maxNumber);