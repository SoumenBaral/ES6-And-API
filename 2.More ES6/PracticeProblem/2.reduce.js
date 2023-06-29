// 1) You have an array [ 1, 9, 17, 22 ]. Add the all elements
// of this array and give output. Do this using for loop &
// array.reduce() method.

const numbers = [ 1, 9, 17, 22 ];
let sum = 0;
for(const number of numbers)
{
    sum= sum+number;
}
// console.log(sum);

const add = numbers.reduce((previous,current)=>{
    // console.log(previous,current);
    return previous+current;
},0)
// console.log(add);



// 2.1) Challenging Follow above array of objects. So, you have 3 objects as
// array element. Can you find out the total sum from here?

// 20 + 15 + 22 = 57 . The output will be 57

// What are you thinking? Yeah! Do it with for loop. I know you can do it.
// But! Wait !! Wait !!! Do the same task using array.reduce() method.

const people =[
    {name:"soumen", age: 20},
    {name:"shuvo", age: 15},
    {name:"Mini", age: 22},

];
const totalAge = people.reduce((previous, current) => {
    return previous+current.age
},0); 
// console.log(totalAge);

//using forLoop 
let total = 0;
for(const person of people){
    total = total+ person.age;
}
// console.log(total);

