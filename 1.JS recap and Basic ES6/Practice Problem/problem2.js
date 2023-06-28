// Write an arrow function where it will do the following:
// a) It will take an array where the array elements will be the
// name of your friends
// b) Check if the length of each element is even, push elements
// with even length to a new array and return the result

const isEven = friends=>{
    const even=[];
    for(const friend of friends)
    {
        if(friend.length%2==0){
            even.push(friend);
        }
    }
    return even;
}
const friends= ['Queen','Senorita','Girly','Gal','Sis','Chica','Missy','Homegirl','BabyFace','soumen', 'shuvo','shakib','salaman','Amirul','KpRifat' ]
const even = isEven(friends);
// console.log(even);