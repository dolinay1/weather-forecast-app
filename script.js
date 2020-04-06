// VARIABLES
const userInput = document.querySelector(".user-submit");
const input = document.querySelector(".user-submit input");
const unserInputDisplay = document.getElementById("userInputDisplay")

//  add to local storage
let userSearches = [];

// Day 1 forcast variables
const tempValue = document.getElementById("temperature-value");
const humidityValue = document.getElementById("humidity-value");
const weatherValue = document.getElementById("weather-value");
const dateValue = document.getElementById("date-value");
const iconValue = document.querySelector(".icon-value1");
const icon1 = document.querySelector(".icon-value-img");

// Day 2 forcast variables
const tempValue2 = document.getElementById("temperature-value2");
const humidityValue2 = document.getElementById("humidity-value2");
const weatherValue2 = document.getElementById("weather-value2");
const dateValue2 = document.getElementById("date-value2");
const iconValue2 = document.querySelector(".icon-value2");
const icon2 = document.querySelector(".icon-value2-img");

// Day 3 forcast variables
const tempValue3 = document.getElementById("temperature-value3");
const humidityValue3 = document.getElementById("humidity-value3");
const weatherValue3 = document.getElementById("weather-value3");
const dateValue3 = document.getElementById("date-value3");
const iconValue3 = document.querySelector(".icon-value3");
const icon3 = document.querySelector(".icon-value3-img");

// Day 4 forcast variables
const tempValue4 = document.getElementById("temperature-value4");
const humidityValue4 = document.getElementById("humidity-value4");
const weatherValue4 = document.getElementById("weather-value4");
const dateValue4 = document.getElementById("date-value4");
const iconValue4 = document.querySelector(".icon-value4");
const icon4 = document.querySelector(".icon-value4-img");

// Day 5 forcast variables
const tempValue5 = document.getElementById("temperature-value5");
const humidityValue5 = document.getElementById("humidity-value5");
const weatherValue5 = document.getElementById("weather-value5");
const dateValue5 = document.getElementById("date-value5");
const iconValue5 = document.querySelector(".icon-value5");
const icon5 = document.querySelector(".icon-value5-img");

// Current Day weather variables
const currentDateValue = document.querySelector(".current-date-value");
const currentTempValue = document.querySelector(".current-temperature-value");
const currentHumidityValue = document.querySelector(".current-humidity-value");
const currentWeatherValue = document.querySelector(".current-weather-value"); 
const currentWindSpeedValue = document.querySelector(".current-windspeed-value");
const currentUVIndexValue = document.querySelector(".current-uv-index-value");


  // set date for current day weather
  let today = new Date();
  let date = (today.getMonth()+1)+'/'+today.getDate() + '/' + today.getFullYear();
  currentDateValue.textContent = "(" + date + ")";
 
userInput.addEventListener("submit", e => {
  e.preventDefault();
  const inputVal = input.value;
  console.log(inputVal);

  // set date for current day weather
let today = new Date();
let date = (today.getMonth()+1)+'/'+today.getDate() + '/' + today.getFullYear();
currentDateValue.textContent = inputVal + " " + "(" + date + ")";

//   for (let i = 0; i < userSearches.length; i++) {
//       const searches = userSearches[i];
//         searches.push(inputVal);
//         let newDiv = document.createElement("div");
//         userInputDisplay.append(newDiv);
//         // newDiv.classList.add("");
//         newDiv.innerHTML = inputVal;

//         console.log(userSearches)

  


  // This is our API key. Add your own API key between the ""
 let APIKey = "64d225c999955681effe1a09231f4e38";
 // api.openweathermap.org/data/2.5/forecast?q={city name},{state}&appid={your api key}
 let queryURLFiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + inputVal + "&appid=" + APIKey + "&units=imperial";

 fetch(queryURLFiveDay)
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);

    // weather info for whole day
//    console.log(data.list["0"]);
    
// UPDATE FORECAST
   updateForecast = function() {

    // 1ST DAY FORECAST-------------------------------------
   
    // 1st day date
   dateValue.textContent = data.list["0"].dt_txt.substr(5, 5).replace("-","/") + "/2020";
   // 1st day description of weather
   weatherValue.textContent = data.list["0"].weather["0"].description;
    // 1st day weather icon code
  
    iconValue.value = data.list["0"].weather["0"].icon;
   let val = iconValue.value,
   src = "http://openweathermap.org/img/wn/" + val + "@2x.png";
   img = document.createElement('img');
   img.classList.add("icon-value-img");
   
    img.src = src;
   iconValue.replaceChild(img, icon1);
   console.log(icon1);

   // 1st day temperature
   tempValue.textContent = "Temp: " + (Math.round(data.list["0"].main.temp)) + "°F";
   // 1st day humidity
   humidityValue.textContent = "Humidity: " + data.list["0"].main.humidity + "%";


   // 2ND DAY FORECAST---------------------------------------

    // 2nd day date
    dateValue2.textContent = data.list["8"].dt_txt.substr(5, 5).replace("-","/") + "/2020";
    // 2nd day description of weather
    weatherValue2.textContent = data.list["8"].weather["0"].description;
     // 2nd day weather icon code
   
    iconValue2.value = data.list["8"].weather["0"].icon;
    val2 = iconValue2.value,
    src = "http://openweathermap.org/img/wn/" + val2 + "@2x.png";
    img = document.createElement('img');
    img.classList.add("icon-value2-img");
   
    img.src = src;

   iconValue2.replaceChild(img, icon2);
   console.log(icon2);
 
    // 2nd day temperature
    tempValue2.textContent = "Temp: " + (Math.round(data.list["8"].main.temp)) + "°F";
    // 2nd day humidity
    humidityValue2.textContent = "Humidity: " + data.list["8"].main.humidity + "%";


    // 3RD DAY FORECAST---------------------------------------

     // 3rd day date
   dateValue3.textContent = data.list["16"].dt_txt.substr(5, 5).replace("-","/") + "/2020";
   // 3rd day description of weather
   weatherValue3.textContent = data.list["16"].weather["0"].description;
    // 3rd day weather icon code
  
   iconValue3.value = data.list["16"].weather["0"].icon;
   val3 = iconValue3.value,
   src = "http://openweathermap.org/img/wn/" + val3 + "@2x.png";
   img = document.createElement('img');
   img.classList.add("icon-value3-img");

   img.src = src;
 
   iconValue3.replaceChild(img, icon3);


   // 3rd day temperature
   tempValue3.textContent = "Temp: " + (Math.round(data.list["16"].main.temp)) + "°F";
   // 3rd day humidity
   humidityValue3.textContent = "Humidity: " + data.list["16"].main.humidity + "%";


   // 4TH DAY FORECAST---------------------------------------

    // 4th day date
    dateValue4.textContent = data.list["24"].dt_txt.substr(5, 5).replace("-","/") + "/2020";
    // 4th day description of weather
    weatherValue4.textContent = data.list["24"].weather["0"].description;
     // 4th day weather icon code
 
    iconValue4.value = data.list["24"].weather["0"].icon;
    val4 = iconValue4.value,
    src = "http://openweathermap.org/img/wn/" + val4 + "@2x.png";
    img = document.createElement('img');
    img.classList.add("icon-value4-img");

    img.src = src;
 
    iconValue4.replaceChild(img, icon4);

    // 4th day temperature
    tempValue4.textContent = "Temp: " + (Math.round(data.list["24"].main.temp)) + "°F";
    // 4th day humidity
    humidityValue4.textContent = "Humidity: " + data.list["24"].main.humidity + "%";


   // 5TH DAY FORECAST---------------------------------------

    // 5th day date
    dateValue5.textContent = data.list["32"].dt_txt.substr(5, 5).replace("-","/") + "/2020";
    // 5th day description of weather
    weatherValue5.textContent = data.list["32"].weather["0"].description;
     // 5th day weather icon code
  
    iconValue5.value = data.list["32"].weather["0"].icon;
    val5 = iconValue5.value,
    src = "http://openweathermap.org/img/wn/" + val5 + "@2x.png";
    img = document.createElement('img');
    img.classList.add("icon-value5-img");

    img.src = src;
 
    iconValue5.replaceChild(img, icon5);
 
    // 5th day temperature
    tempValue5.textContent = "Temp: " + (Math.round(data.list["32"].main.temp)) + "°F";
    // 5th day humidity
    humidityValue5.textContent = "Humidity: " + data.list["32"].main.humidity + "%";
   }
   updateForecast();

    
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

