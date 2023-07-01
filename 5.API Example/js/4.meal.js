
const loadMeal =(search)=>{
   
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayMeal(data.meals))

    search.value ='';
}

const displayMeal = (meals)=>{
    const mealContainer = document.getElementById("meal_container");
    mealContainer.innerHTML =``;
    meals.forEach(meal => {
       const Div = document.createElement('div');
       Div.classList.add('col');
       Div.innerHTML=`
       <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,100)}</p>
           </div>
     </div>`
       mealContainer.appendChild(Div);
    });
}
const searchMeal=()=>{
    const mealField = document.getElementById("search_field");
    const newMeal = mealField.value;
    loadMeal(newMeal)
    console.log(mealField.value);

    mealField.value ='';

}


loadMeal('b');