const student = {
    name: 'Kolim Uddin',
    age: 15,
    class: 'Ten',
    marks: {
        math: 78,
        physics: 89,
        chemistry: 65
    },

}
const math = student.marks.math;
// console.log(math);

const chemistry = student['marks']['chemistry'];
// console.log(chemistry);

const subject = 'math';
const math2 = student.marks[subject];
console.log(math2);