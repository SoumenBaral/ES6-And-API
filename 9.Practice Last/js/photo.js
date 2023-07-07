// ৭. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা 
// fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ
//  photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই
//   ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে 
//   (হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট
//    এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে। 

const loadData =()=>{
    const url = `https://jsonplaceholder.typicode.com/photos`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayData(data))
};
const displayData = photos=>{
    const photoContainer = document.getElementById('photo_container');
    for(let i= 0; i<10; i++){
        const photo = photos[i];
        // console.log(photo);
        const Div = document.createElement('div');
        Div.classList.add('col');
        Div.innerHTML =`
        <div class="card">
        <div data-bs-toggle="modal" data-bs-target="#phoneDetailModal" onclick="loadDetails(${photo.id})" class="d-flex justify-content-center align-items-center mt-4"><img src="${photo.url}" class="card-img-bottom " style="width: 70%; "  alt="..."  ></div>
        <div class="card-body">
          <h5 class="card-title">${photo.title}</h5>
          <p class="card-text">This is a longer card with supporting text below as a .</p>
        </div>
        

      </div>`
      photoContainer.appendChild(Div);

    }
}
loadData();

// প্রত্যেকটা ফটোতে ক্লিক করলে উপরে আরেকটা div থাকবে। ক্লিক করার পর 
// ডাইনামিকভাবে ওই ফটো এর ডাটা লোড করবে। সেটা করার জন্য আগের ডাটা
//  লোড করার API এর লিংক এর পরে photos এর পরে ডাইনামিকভাবে ${id}
//   বসিয়ে দিবে। এরপর ডিটেইল অংশে photo এর url দিয়ে মেইন ইমেজ এবং 
//   thumbnail ইমেজ দুইটাই দেখাবে। সাথে সাথে title প্রপার্টিও দেখাবে। 
const loadDetails = Id =>{
    // console.log(Id);
    const url = `https://jsonplaceholder.typicode.com/photos/${Id}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayDetails(data))
}

function displayDetails (Detail){
    console.log(Detail);
    const Details = document.getElementById('Details');
    Details.innerHTML = ``;
    const Div = document.createElement('div');
        Div.classList.add('col');
        Div.innerHTML =`
        <div class="card">
        <div  class="d-flex justify-content-center align-items-center mt-4"><img src="${Detail.url}" class="card-img-bottom " style="width: 70%; "  alt="..."></div>
        <div class="card-body">
          <h5 class="card-title">${Detail.title}</h5>
          <p class="card-text">This is a longer card with supporting text below as a .</p>
        </div>
      </div>`
      Details.appendChild(Div);

}