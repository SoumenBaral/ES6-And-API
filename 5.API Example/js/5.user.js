const loadUserFetch =()=>{
    const url = `https://randomuser.me/api/?gender=female`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayData(data.results[0]))
    .catch( error=> console.log(error))
}
const loadUserAsync = async()=>{
    const url = `https://randomuser.me/api/?gender=female`;
    try {
       const res = await fetch(url);
       const data = await res.json();
       displayData(data.results[0]); 
    }
    catch (error) {
        console.log(error);
    }

}

const displayData = data =>{
    console.log(data);
}