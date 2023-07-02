const numbers = [12, 54, 65, 3, 54];
// for(const number of numbers){
//     console.log(number);
// }
const bottle = { color: 'yellow', price: 50, isCleaned: true, capacity: 1 };

// const keys = Object.keys(bottle);
// console.log(keys);
// for(const key of keys){
//     console.log(key, bottle[key]);
// }

for(const key in bottle)
{
    // console.log(key,bottle[key]);
}

//we get the value of Object via :
// 1. bottle.propertyName;
// 2. bottle['Exact property name or keys name ']
// 3. bottle[variable Name];

// advanced 
const pair = Object.entries(bottle);
console.log(pair)
for(const [key, value] of pair){
    console.log(key, value);
}