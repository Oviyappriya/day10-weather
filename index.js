//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
let API_KEY='6b11b4b5b006e635ac8202a4ab8af247';
getWeatherData=(city)=>{
 const URL="https://api.openweathermap.org/data/2.5/weather";
 const Full_Url=`${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
 console.log(Full_Url);
 console.log(city)
 const weatherPromise=fetch(Full_Url);
 return weatherPromise.then((response)=>{
    return response.json()
});
}
function searchCity(){
    let city=document.getElementById('city-input').value;
    getWeatherData(city)
    .then(response=>{
    showWeatherData(response)
})
.catch((err)=>{
    console.log(err);
})
}
showWeatherData=(weatherData)=>{
    document.getElementById('city-name').innerHTML=weatherData.name;
    document.getElementById('weather-type').innerText=weatherData.weather[0].main;
    document.getElementById('temp').innerText=weatherData.main.temp;
    document.getElementById('min-temp').innerText=weatherData.main.temp_min;
    document.getElementById('max-temp').innerText=weatherData.main.temp_max;
}