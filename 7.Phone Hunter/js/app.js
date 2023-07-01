const LoadPhone =async(searchText)=>{
    const url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data =await res.json();
    displayPhone(data.data);
}

const displayPhone =Phones=>{
    const PhoneContainer = document.getElementById("Phone_container");
    PhoneContainer.innerHTML =``;
    // Phones= Phones.slice(0, 10);

    const NoPhone = document.getElementById("no-found-message");
    if (Phones.length ==0) {
        NoPhone.classList.remove('d-none');
    }
    else{
        NoPhone.classList.add('d-none');
    }
    Phones.forEach(phone=> {
        console.log(phone);
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
const getPhone=()=>{
    toggleSpinner(true)
    const searchText = document.getElementById("search-field");
    LoadPhone(searchText.value);
    searchText.value ='';
}
const toggleSpinner = isSpin =>{
    const loader = document.getElementById("loader");
    if(isSpin){
        loader.classList.remove('d-none');

    }
    else{
        loader.classList.add('d-none');
    }
}
// LoadPhone('apple');

                        