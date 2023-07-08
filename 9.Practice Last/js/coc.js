const getMod =()=>{
    const Search = document.getElementById('search-field');
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${Search.value}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>console.log(data.drinks))
}