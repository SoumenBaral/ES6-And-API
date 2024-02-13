// Different Between Var let; 
document.write(x, '\n') //It wee gat undefined as a result of it 
var x = 0;
x = 30;
document.write(x, '\n')

// document.write(y,'\n'); //Can not access y before initialization 
let y = 23;
console.log(x);

const fun = () => {
    setInterval(() => {
        let cal1; // Declare cal1 here

        if (document.getElementById('var').style.color === "black") {
            cal1 = "blue"; // Assign value to cal1
        } else {
            cal1 = "black"; // Assign value to cal1
        }

        document.getElementById('var').style.color = cal1;

    }, 1);
}


function jun(params=0,narams=0) {
    console.log(params+narams);
}
jun(30);
const add = document.getElementById("var");
console.log(add);
fun();
const ar = [12,32,53,56,99];

console.log(...ar);

const news = [...ar,1000];

console.log(news);
const max = Math.max(...news);
console.log(max);

const {age, name} = {name: 'Almas', age: 56, profession: 'makeup artist'}
console.log(age);
