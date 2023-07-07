// একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে
// কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ comments এর API 
// এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। 
const loadComments =() =>{
    const url = `https://jsonplaceholder.typicode.com/comments`
    fetch(url)
    .then(res=>res.json())
    .then(data => disPlayComment(data))
}


// . যে কমেন্ট এর ডাটাগুলো কনসোল এ দেখাতে পারছো। সেগুলা আবার তুমি html এ 
// দেখাতে পারতেছো কিনা। একটা সিস্টেম হবে তোমার একটা বাটন। থাকবে সেটাতে ক্লিক করলে 
// ডাটা লোড হবে। তারপর সেই ডাটা তুমি ওয়েবসাইট এ দেখাবে। 

const disPlayComment =(comments)=>{
    const addComment = document.getElementById("add-Comments")
    addComment.innerHTML = ``;
    for(let i = 0 ; i<20; i++)
    {
        const comment = comments[i];
        const Div = document.createElement('div');
        Div.classList.add('comments')
        Div.innerHTML =`
        <h3>Name :  ${comment.name}</h3>
        <p>About Me : ${comment.body}</p>
        <button onclick="loadPost(${comment.id})">My Post</button>`
        console.log(comment);
        addComment.appendChild(Div);
    }
    
}
const loadPost =(ID)=>{
    const url =`https://jsonplaceholder.typicode.com/posts/${ID}`
    console.log(url);
    fetch(url)
    .then(res=>res.json())
    .then(data => disPlayPost(data))
}
const disPlayPost =(data)=>{
    const Post_container = document.getElementById("Post_container");
    Post_container.innerHTML =``;
    const Div = document.createElement('div');
    Div.classList.add('post');
    Div.innerHTML=  `
    <h5>POST-----></h5>
    <h4>Caption: ${data.title}</h4>
    <p>About:  ${data.body.slice(0,100)}</p>
    `
    console.log(data);
    Post_container.appendChild(Div);

}
loadComments();

