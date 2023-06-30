function loadUser(){
    fetch("https://randomuser.me/api/?results=500")
    .then(res=>res.json())
    .then(data=>displayUser(data))
}

function displayUser(user){
    
    // console.log(user);
    const setImg = document.getElementById("setImg");
    const setName = document.getElementById("setname");
    const setGender =document.getElementById("Gender");
    const Name = user.results[0].name.first + " " +user.results[0].name.last;
    const Gender = user.results[0].gender;
    const ImgSrc = user.results[0].picture.medium;
    setImg.src =ImgSrc;
    setName.innerText = Name;
    setGender.innerText = Gender;
    // console.log(Name);
}
loadUser()
const seeAn =()=>{
    location.reload()
}