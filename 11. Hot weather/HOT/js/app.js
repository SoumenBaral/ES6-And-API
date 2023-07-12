const Api_key = `1185761ea2969706fef61cb3c05ff9d3`;

const LoadWeatherTemperature = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}&units=metric`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayData(data));
}


const displayData = weather=>{
    const temp = document.getElementById('temp');
    temp.innerText =weather.main.temp;
    const lead = document.getElementById("led");
    lead.innerText = weather.weather[0].main;
}
function searchCity(){
    const inputField = document.getElementById('city');
    const city_name = document.getElementById("city_name");
    city_name.innerText = inputField.value;
    LoadWeatherTemperature(inputField.value);

}
LoadWeatherTemperature("Dhaka");