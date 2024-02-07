const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" ;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e410d41cafmsha85818c0a4bcb8bp1d8370jsnde15552cc6cd",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(url + city, options)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    
    temp.innerHTML = response.temp;
    temp2.innerHTML = response.temp;
    feels_like.innerHTML = response.feels_like;
    feels_like2.innerHTML=response.feels_like;
    humidity.innerHTML = response.humidity;
    min_temp.innerHTML = response.min_temp;
    max_temp.innerHTML = response.max_temp;
    wind_speed.innerHTML = response.wind_speed;
    wind_speed2.innerHTML = response.wind_speed;
    wind_degrees.innerHTML = response.wind_degrees;
    let a = new Date(response.sunrise);
    let b = new Date(response.sunset);
    sunrise.innerHTML = a.toLocaleTimeString(); 
    sunset.innerHTML = b.toLocaleTimeString();	
  })
  .catch((err) => console.error(err));
}

submit.addEventListener("click", (e)=> {
  e.preventDefault();
  getWeather(city.value);
})