const loadCountries = ()=>{
    const url ="https://restcountries.com/v3.1/all";
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayCountries(data))

}
const displayCountries = countries =>{
    const addCountry = document.getElementById("all-countries")
    countries.forEach(country => {
        // console.log(country);
     const div = document.createElement('div');
     div.classList.add("country");
     div.innerHTML=`
     <h3>Name: ${country.name.common}</h3>
     <p> Capital : ${country.capital ? country.capital:"Don't have any capital"}</p>
     <button onClick="Details('${country.cca2}')">Details</button>`
        addCountry.appendChild(div);
        // console.log(country.capital);
    });
}
const Details = (code)=>{
console.log(code);
const url=`https://restcountries.com/v3.1/alpha/${code}`
// console.log(url);
fetch(url)
.then(res=>res.json())
.then(data=>displayDetails(data[0]))

}
const displayDetails = Detail =>{
    console.log(Detail);
    const countryDet = document.getElementById('country-detail')
    // const div = document.createElement('div');
    countryDet.innerHTML =`
    <h3>Name: ${Detail.name.common} </h3>
    <img src="${Detail.flags.png}">'>`
    // console.log(Detail.flag);
    // countryDet.appendChild(div);
}
loadCountries();