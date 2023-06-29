//syntactic sugar 
class instructor{
    name;
    designation="Web developer";
    location;
    team = "Web team";

    constructor(name,location)
    {
        this.name= name;
        this.location = location;
    }
    startASupport(time){
        console.log(`${this.name} start a support session at ${time}`);
    }

    startQuiz(module){
        console.log(`start a quiz of Module ${module}`);
    }
}
const soumen = new instructor("soumen","Dhaka");
console.log(soumen);
soumen.startASupport('8.10');
soumen.startQuiz(60);