// function add (first,second)
// {
//     second =second||0;
//     console.log(first,second);
//     // if(second == undefined){
//     //     second=0;
//     // }
//     const newNumber = first+second;
//     console.log(newNumber);
// }
function add (first=0,second=0)
{
   
    console.log(first,second);
    
    const newNumber = first+second;
    console.log(newNumber);
}
add(233);