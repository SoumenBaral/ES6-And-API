function loadPost()
{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data=>displayPost(data))
}

function displayPost(posts)
{
    const postContainer = document.getElementById("post-container");
    for(const post of posts)
    {
        const DIV = document.createElement('div');
        DIV.classList.add("post");
        DIV.innerHTML = ` 
            <h4>User - ${post.id}</h4>
            <h5>Post: ${post.title}</h5>
            <p>Post Description: ${post.body}</p>`
        // console.log(post);
        postContainer.appendChild(DIV);
    }
}
loadPost();