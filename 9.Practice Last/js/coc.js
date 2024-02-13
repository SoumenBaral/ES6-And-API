const getMod =()=>{
    const Search = document.getElementById('search-field');
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${Search.value}`;
    Search.value ='';
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayMod(data.drinks))
}
const displayMod = drinks=>{
    const container = document.getElementById('cocktail-container');
    container.innerHTML = ``;
    drinks.forEach(drink => {
        console.log(drink);
        const Div = document.createElement('div');
        Div.classList.add('col');
        Div.innerHTML=`
        <div class="card">
             <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
             <div class="card-body">
                 <h5 class="card-title">${drink.strDrink}</h5>
                <p class="card-text">${drink.strInstructions.slice(0,50)}</p>
             </div>
        </div>`
        container.appendChild(Div);
    });
}