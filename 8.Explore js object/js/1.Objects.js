// Object ar literal when object is empty then it called literal 

const person = {};

person.name = "Soumen ";
person.age = 25;
person.Job = "Baker!!!!!!!!!!!!!!!";
person.Passion = function(){
    console.log("Play code ");
}
// console.log(person);
// person.Passion();

const student = {
    name: 'Pandey',
    job: 'khai andey',
    ball: function(){
        console.log('throw the ball')
    },
    salary: 100000
}


// 2. object constructor
const persons = new Object();
persons.name = "Samsu gasay jaila kobabe tar chale ";
// console.log(persons);

// 3. object create method
const item = Object.create(null);
const artel = Object.create(student);
// console.log(artel.name);

class web_team{
    name;
    job = 'web developer';
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }
};

const newMember = new web_team("Abul",23);
console.log(newMember);

function Car(model, price){
    this.model = model;
    this.price = price;
}
const tesla = new Car("Tesla-69",123456098);
console.log(tesla);