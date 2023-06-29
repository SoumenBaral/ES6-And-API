const user = {name: "gorib alli",job:"Toto Company" , age : 29};
const stringified = JSON.stringify(user); 
// console.log(user);
// console.log(stringified);
const parsed = JSON.parse(stringified);
// console.log(parsed);


const shop = {
    owner: 'Alia',
    address: {
        street: 'kochukhet voot er goli',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
};
console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);
const shopObject = JSON.parse(shopJson);
console.log(shopObject);