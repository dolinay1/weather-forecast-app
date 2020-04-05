
const userInput = document.querySelector(".user-submit");
const input = document.querySelector(".user-submit input");
const tempValue = document.querySelector(".temperature-value");
const humidityValue = document.querySelector(".humidity-value");
const weatherValue = document.querySelector(".weather-value");
const dateValue = document.querySelector(".date-value");
const iconValue = document.getElementById("icon-value");


const currentDateValue = document.querySelector(".current-date-value");
const currentTempValue = document.querySelector(".current-temperature-value");
const currentHumidityValue = document.querySelector(".current-humidity-value");
const currentWeatherValue = document.querySelector(".current-weather-value"); 
const currentWindSpeedValue = document.querySelector(".current-windspeed-value");
const currentUVIndexValue = document.querySelector(".current-uv-index-value");

// const clearSkyIcon = http://openweathermap.org/img/wn/10d@2x.png;

// set date for current day weather
let today = new Date();
let date = (today.getMonth()+1)+'-'+today.getDate() + '-' + today.getFullYear();
currentDateValue.textContent = date;
 
userInput.addEventListener("submit", e => {
  e.preventDefault();
  const inputVal = input.value;
  
//  add to local storage
userSeaches = [];

  // This is our API key. Add your own API key between the ""
 let APIKey = "64d225c999955681effe1a09231f4e38";
 // api.openweathermap.org/data/2.5/forecast?q={city name},{state}&appid={your api key}
 let queryURLFiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + inputVal + "&appid=" + APIKey + "&units=imperial";

 fetch(queryURLFiveDay)
  .then((response) => {
    return response.json();
  })
  .then((data) => {

    // console.log(data);

    // weather info for whole day
   console.log(data.list["0"]);
   
    // 1st day date
   dateValue.textContent = data.list["0"].dt_txt.substr(5, 5) + "-2020";
   // 1st day description of weather
   weatherValue.textContent = data.list["0"].weather["0"].description;
    // 1st day weather icon code
   iconValue.value = data.list["0"].weather["0"].icon;
   let val = iconValue.value,
   src = "http://openweathermap.org/img/wn/" + val + "@2x.png";
   img = document.createElement('img');

    img.src = src;
    document.getElementById("icon-value").appendChild(img);

   // 1st day temperature
   tempValue.textContent = (Math.round(data.list["0"].main.temp)) + "°F";
   // 1st day humidity
   humidityValue.textContent = data.list["0"].main.humidity + "%";
  });


  let queryURLDaily = "https://api.openweathermap.org/data/2.5/weather?q=" + inputVal + "&appid=" + APIKey + "&units=imperial";

  fetch(queryURLDaily)
   .then((response) => {
     return response.json();
   })
   .then((data) => {
 
     console.log(data);


    currentTempValue.textContent = (Math.round(data.main.temp)) + "°F";

    currentHumidityValue.textContent = data.main.humidity + "%";

    currentWindSpeedValue.textContent = data.wind.speed + " mph";



    let lon = data.coord.lon;
    let lat = data.coord.lat;
    let queryURLUV = "http://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + lat + "&lon=" + lon;
 
    fetch(queryURLUV)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
  
     currentUVIndexValue.textContent = data.value;
    
     if (data.value > 7) {
        //  change red
        currentUVIndexValue.style.backgroundColor = "red";
        currentUVIndexValue.style.color = "white";
     } else if (data.value < 7 && data.value > 5) {
        // change orange
        currentUVIndexValue.style.backgroundColor = "orange";
        currentUVIndexValue.style.color = "white";
     } else if (data.value < 5 && data.value > 3) {
        //  change yellow
        currentUVIndexValue.style.backgroundColor = "yellow";
        currentUVIndexValue.style.color = "white";
     } else if (data.value < 3) {
        //  change green
        currentUVIndexValue.style.backgroundColor = "green";
        currentUVIndexValue.style.color = "white";
     }
 
    });
 
   });
   
});

// --------------------------------------


// function setDateTime() {
//     const today = moment();
//     let currentDay = document.querySelector(".current-date-value");
//     currentDay.text(today.format("dddd, " + "MMMM " + "DD, " + "YYYY, " + "h:mm a"));
// }
// setDateTime();



 


  // let questionChoices = Object.values(choices)[quizProperties.questionSet];

//     if (quizProperties.questionSet === Object.keys(questions).length) {
//         console.log("done");
//     } else {
        
//         questionChoices.forEach(key => {
//             let searchItemDiv = document.createElement("searchItem");
                
//                 searchedItemDivDisplay.append(searchItemDiv);

//                 searchItemDiv.classList.add("btn", "btn-primary", "mr-3", "mt-3", "choice");

//                 searchItemDiv.innerHTML = key;
//             });
//     }

