const users = [ {id: 1, name: 'abul', job: 'doctor'},{id: 1, name: 'abul', job: 'doctor'} ];
// for (const user of users) {
//     console.log(user);
// }
// console.log(users[0].name);
// console.log(users[1].job);

const data = {
    count: 5000,
    data: [
        {id: 1, name: 'babul', job: 'leader'},
        {id: 2, name: 'dabul', job: 'leader'},
    ]
}
// console.log(data.data[0].name);

const user = {
    id: 5001,
    name: 'Thomas alba edison',
    address: {
        street: {
            first: '35/A kochukhet lane',
            second: 'third floor',
            third: 'right side'
        },
        postOffice: 'cantonment',
        city: 'Dhaka'
    }
} 
console.log(user.address?.street.second);
