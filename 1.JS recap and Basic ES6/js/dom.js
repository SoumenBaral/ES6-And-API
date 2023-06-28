function change_bg(){
    const friends = document.getElementsByClassName("friend");
    for(const friend of friends){
        // console.log(friend);
        // friend.style.backgroundColor ='red';
        friend.style.backgroundColor = "red";
    }
}
document.getElementById("center-3rd").addEventListener('click',function(){
    const getThird = document.getElementById("3rd_friend");
    getThird.style.textAlign ="center";
    // console.log(getThird.innerText);
})
let count = 5;
document.getElementById('add-friend').addEventListener('click',function(){
    count= count+1;
    const getParent = document.getElementById("all_friend");
    const div = document.createElement('div');
    div.classList.add("friend");
    div.innerHTML =`
    <h2 class='friend_name'>Friend-${count}</h2>
    <p>Odit alias dolorem rerum nisi!</p>`
    
    getParent.appendChild(div); 
})