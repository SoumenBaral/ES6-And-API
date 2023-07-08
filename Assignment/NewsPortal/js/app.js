const loadCategory =() =>{
    fetch("https://openapi.programming-hero.com/api/news/categories")
    .then(res=>res.json())
    .then(data=>displayCategory(data.data.news_category))
    .catch(error=>{
        console.error("Error: ",error);
    })
}
const displayCategory = cats=>{
    const category = document.getElementById("category");
    cats.forEach(cat=>{
        console.log(cat);
        const Li = document.createElement('li');
        Li.setAttribute('type','button');
        Li.classList.add('col')
        Li.innerHTML =`<span ${cat.category_name=='Entertainment'?"style='color:blue;'":"style=''"} onclick="loadNews(${cat.category_id})">${cat.category_name}</span>`
        category.appendChild(Li);

    })
    
}
function loadNews(Id){

    console.log(Id);
    const colorButtons = document.querySelectorAll('.col');

// Add click event listener to each button
colorButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Remove color class from all buttons
    colorButtons.forEach(button => {
      button.classList.remove('active');
    });
  
    // Add color class to the clicked button
    this.classList.add('active');
  });
});
const url =`https://openapi.programming-hero.com/api/news/category/"${Id}"`;
    fetch("https://openapi.programming-hero.com/api/news/categories")
    .then(res=>res.json())
    .then(data=>displayNews(data.data))
    .catch(error=>{
        console.error("Error: ",error);
    })
}
    const displayNews=news=>{
        console.log(news);
    }
loadCategory();
