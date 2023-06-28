//1 paraMeter don't need bracket
const doit = num => num*3;
const res = doit(10);
console.log(res);

// Multiline Arrow Function

const doMath = (fist,second,third)=>{
    const fistSum = fist+ third;
    const secondSum = second+fist;
    const multiple = fistSum*secondSum;
    const getDiv5 = multiple/5;
    return getDiv5; 
}
const result = doMath(10,20,30);
console.log(result);
