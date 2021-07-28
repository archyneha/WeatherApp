const iconElement = document.querySelector(".icon");
const locationIcon = document.querySelector(".location-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");
const button = document.querySelector("#button");
var input = document.getElementById("search");

let city;
button.addEventListener("click", function (event) {


  event.preventDefault();
  city = input.value;
  if (city == " ") {
    alert("ENTER THE CITY");
  }
  else {
    getSearchWeather(city);
    console.log(city);
  }



})


const KELVIN = 273;
const key = '7dd52d6bcb7b7cbad2dac5d944f6e3cc';
function getSearchWeather(city) {
  let api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
  console.log(city);
  fetch(api)
    .then(function (response) {
      let data = response.json()
      return data
    })


    .then(function (data) {
      displayWeather(data)
    })
    .catch(function () {
      console.log("INCORRECT DATA")
    }

    )

}

function displayWeather(data) {

  var iconcode = data.weather[0].icon;
  var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

  iconElement.src = iconurl

  tempElement.innerHTML = `${Math.floor(data.main.temp - KELVIN)}*<span>C</span>`
  descElement.innerHTML = `${data.weather[0].description}`
  locationElement.innerHTML = `${data.name}`


}
