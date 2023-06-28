const numbers = [12, 56, 87, 44];
const half = numbers.map(x=>x/2);
const thirds = numbers.map(x=>x/3);
// console.log(half);
// console.log(thirds);

const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'TOM Solaiman'];
const firstLatter = friends.map(friend=>friend[0]);
// console.log(firstLatter);

const nameLengths = friends.map(friend=>friend.length);
// console.log(nameLengths);

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'mobile', price: 80000},
    {id: 1, name: 'watch', price: 35000},
    {id: 1, name: 'tablet', price: 23000},
];

const productName = products.map(product=>product.name);
const productPrice = products.map(p=> p.price);
console.log(productName);
console.log(productPrice);