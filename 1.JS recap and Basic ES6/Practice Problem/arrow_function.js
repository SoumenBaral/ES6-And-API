
//1) Write an arrow function that will take 3 parameters, will multiply
// the parameters and will return the result.
const fun = (first,second,third)=>{
    const result = first*second*third;
    return result;
}
const result = fun(5,5,5);
// console.log(result);
// 2) Write the following sentence in three lines and print the result:
// I am a web developer. I love to code. I love to eat biryani.

const template =`
I am a web developer.
I love to code.
I love to eat biryani
` ;
// console.log(template);

// 3) Write an arrow function that will take 2 parameters: One parameter
// will come from you and the other parameter will be a default
// parameter. Add these two parameters and return the result.

const add = (first,second=0)=>{
   const  result = first+second;
    return result;
}
const defaultParameter = add(10);
console.log(defaultParameter); 