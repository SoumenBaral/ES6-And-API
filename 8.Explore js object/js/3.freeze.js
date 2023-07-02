const bottle = { color: 'yellow', price: 50, isCleaned: true, capacity: 1 };
const keys = Object.keys(bottle);
const value = Object.values(bottle);
const pair = Object.entries(bottle);
// console.log(pair);
// console.log(value);
// console.log(keys);

// const twoDimension = [ [ 'color', 'yellow' ], [ 'price', 50 ], [ 'isCleaned', true ], [ 'capacity', 1 ]]
console.log(bottle);
// Object.seal(bottle); // we can Only Modify the property of the object we can't add or delete any property of the object ;
Object.freeze(bottle); // we can not modify or add any think ..we can not do any think via this function;
delete bottle.isCleaned;
bottle.price = 1000;
bottle.height = 12;
bottle.Owner = "Soumen Baral";
console.log(bottle);