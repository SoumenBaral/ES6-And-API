// 1..You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
// Now convert this array into an even array (array with even
// numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
// method. Hints: add one to any odd number and it will become an even
// number.

const numbers =[ 1, 3, 5, 7, 9 ];
const even=[];
for(let number of numbers)
{
    number = number+1;
    even.push(number)
}
// console.log(even);
const even2 = numbers.map(number=>number+1);
// console.log(even2);


//-----------------------------------------------------------------------|
// 2 . You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now   |
// return/get all the elements which are divisible by 10 using           |
// array.filter() method.                                                |
//=======================================================================>


const values = [33, 50, 79, 78, 90, 101, 30 ];

const fiveBy = values.filter(v=>v%5==0);
console.log(fiveBy);


// 3.Now do the same task of question 2. But do this using array.find()
// method. Then compare the output of question 2 & question 3.

const fiveByFIND = values.find(v=>v%5==0);
console.log(fiveByFIND);