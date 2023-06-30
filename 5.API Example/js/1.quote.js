function newQuote(){
    fetch("https://api.kanye.rest/")
    .then(res=>res.json())
    .then(data=>displayQuote(data))
}
function displayQuote(quote){
    // console.log(quote.quote);
    const parent = document.getElementById("list-Container");
    // const P = document.createElement('p');
    // P.innerText=quote.quote
    // parent.appendChild(P);
    parent.innerText=quote.quote;
}