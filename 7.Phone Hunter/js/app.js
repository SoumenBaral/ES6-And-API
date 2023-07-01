const LoadPhone =async(searchText,dataLimit)=>{
    const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data =await res.json();
    displayPhone(data.data,dataLimit);
}

const displayPhone =(Phones,dataLimit)=>{
    const PhoneContainer = document.getElementById("Phone_container");
    PhoneContainer.innerHTML =``;

    const showAll =  document.getElementById("show-all");
    if(dataLimit && Phones.length>10)
    {
      Phones= Phones.slice(0, 10);
      showAll.classList.remove('d-none');

    }
    else{
        showAll.classList.add("d-none");
    }

    const NoPhone = document.getElementById("no-found-message");
    if (Phones.length ==0) {
        NoPhone.classList.remove('d-none');
    }
    else{
        NoPhone.classList.add('d-none');
    }
    Phones.forEach(phone=> {
        // console.log(phone);
        const Div = document.createElement('div');
        Div.classList.add('col');
        Div.innerHTML=`
        <div class="card p-4">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button onclick="loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show Details</button>
            </div>
         </div>`
        PhoneContainer.appendChild(Div);
    })  
    toggleSpinner(false)              
}
const processSearch =(dataLimit)=>{
    toggleSpinner(true)
    const searchText = document.getElementById("search-field");
    LoadPhone(searchText.value,dataLimit);
    return searchText;
}
const getPhone=()=>{
    processSearch(10);
}
document.getElementById("search-field").addEventListener('keyup',function (e){
    if (e.key === 'Enter') {
        processSearch(10);
        // console.log('Enter key pressed!');
      }
})
document.getElementById("btn-show-all").addEventListener('click',function(){
 const clear =processSearch();
 clear.value ='';
// console.log("clicked");
})
const toggleSpinner = isSpin =>{
    const loader = document.getElementById("loader");
    if(isSpin){
        loader.classList.remove('d-none');

    }
    else{
        loader.classList.add('d-none');
    }
}

const loadPhoneDetails = async(id)=>{
    const url = ` https://openapi.programming-hero.com/api/phone/${id}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhoneDetails(data.data);
}
const displayPhoneDetails =phone=>{
    const phoneName = document.getElementById("phoneDetailModalLabel");
    phoneName.innerText = phone.name;
    console.log(phone);
    const phoneDetails = document.getElementById('phone-details');
    console.log(phone.mainFeatures.sensors[0]);
    phoneDetails.innerHTML = `
        <p>Release Date: ${phone.releaseDate? phone.releaseDate : "NO releaseDate found"}</p>
        <p>Storage: ${phone.mainFeatures ? phone.mainFeatures.storage : 'No Storage Information '}</p>
        <p>Others: ${phone.others ? phone.others.Bluetooth : 'No Bluetooth Information'}</p>
        <p>Sensor: ${phone.mainFeatures.sensors ? phone.mainFeatures.sensors[0] : 'no sensor'}</p>
    `
}
LoadPhone('apple');

                        