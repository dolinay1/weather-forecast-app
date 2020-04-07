// VARIABLES
const userInput = document.querySelector(".user-submit");
const input = document.querySelector(".user-submit input");
const userInputDisplay = document.getElementById("userInputDisplay");
const savedSearch = document.querySelector(".saved-search");
let userSearches = [];


// Day 1 forcast variables
const tempValue = document.getElementById("temperature-value");
const humidityValue = document.getElementById("humidity-value");
const weatherValue = document.getElementById("weather-value");
const dateValue = document.getElementById("date-value");
const iconValue = document.querySelector(".icon-value1");
const icon1 = document.querySelector(".icon-value-img");
// const iconDisplay = document.querySelector(".icon-display");

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


  // set date for current day
  let today = new Date();
  let date = (today.getMonth()+1)+'/'+today.getDate() + '/' + today.getFullYear();
  currentDateValue.textContent = "(" + date + ")";

  //  add to local storage



function storeSearches() {
  let storedSearches = JSON.parse(localStorage.getItem("userSearches"));
  if (storedSearches !== null) {
      userSearches = storedSearches;
      console.log(userSearches)
  }
}

  function clearIcon() {
    iconValue.removeChild(iconValue.firstChild);
    iconValue2.removeChild(iconValue2.firstChild);
    iconValue3.removeChild(iconValue3.firstChild);
    iconValue4.removeChild(iconValue4.firstChild);
    iconValue5.removeChild(iconValue5.firstChild);
  }
// Initializes forecast functionality with user submit
userInput.addEventListener("submit", e => {
  e.preventDefault();
  const inputVal = input.value;
  console.log(inputVal);

  let searchHistory = input.value;
    if (searchHistory === "") {
        return;
    };
    userSearches.push(searchHistory)
    localStorage.setItem("userSearches", JSON.stringify(userSearches));
    console.log(userSearches);
    // queryURL = buildQueryUrl();
    // var fiveDayQueryURL;

  // set date for current day with city name
let today = new Date();
let date = (today.getMonth()+1)+'/'+today.getDate() + '/' + today.getFullYear();
currentDateValue.textContent = inputVal + " " + "(" + date + ")";



let newBtn = document.createElement("button");
    // userSearches.forEach(elem => {
        
        userInputDisplay.append(newBtn);
        newBtn.classList.add("saved-search", "button");
        localStorage.setItem("saved-search", inputVal);
        newBtn.innerHTML = localStorage.getItem("saved-search");

        console.log(userInputDisplay);
        

    // });
    // newDiv.innerHTML = localStorage.getItem("saved-search");



  // for (let i = 0; i < userSearches.length; i++) {
  //     const searches = userSearches[i];
  //       searches.push(inputVal);
  //       let newDiv = document.createElement("div");
  //       userInputDisplay.append(newDiv);
  //       newDiv.classList.add("saved-search");
  //       newDiv.innerHTML = inputVal;

  //       console.log(userSearches)
  // }
  


  // This is our API key. Add your own API key between the ""
 let APIKey = "64d225c999955681effe1a09231f4e38";
 // api.openweathermap.org/data/2.5/forecast?q={city name},{state}&appid={your api key}
 let queryURLFiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + inputVal + "&appid=" + APIKey + "&units=imperial";

 fetch(queryURLFiveDay)
  .then((response) => {
    return response.json();
  })
  .then((data) => {

    clearIcon();
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
   let val = iconValue.value;
   
   src = "http://openweathermap.org/img/wn/" + val + "@2x.png";
   img = document.createElement('img');
   img.classList.add("icon-value-img");

  //  let newDivIcon = document.createElement("div");
  //  newDivIcon.classList.add("card-footer-item", "capitalize", "icon-value1")
  //  iconDisplay.append(newDivIcon);
   
    img.src = src;
    iconValue.appendChild(img)

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
    let val2 = iconValue2.value;
    
    src = "http://openweathermap.org/img/wn/" + val2 + "@2x.png";
    img = document.createElement('img');
    img.classList.add("icon-value2-img");

    
   
    img.src = src;
    iconValue2.appendChild(img)

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
   let val3 = iconValue3.value;
   
   src = "http://openweathermap.org/img/wn/" + val3 + "@2x.png";
   img = document.createElement('img');
   img.classList.add("icon-value3-img");

   img.src = src
   iconValue3.appendChild(img)


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
    let val4 = iconValue4.value;
    
    src = "http://openweathermap.org/img/wn/" + val4 + "@2x.png";
    img = document.createElement('img');
    img.classList.add("icon-value4-img");

    img.src = src;
    iconValue4.appendChild(img)

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
    let val5 = iconValue5.value;
    
    src = "http://openweathermap.org/img/wn/" + val5 + "@2x.png";
    img = document.createElement('img');
    img.classList.add("icon-value5-img");

    img.src = src;
    // iconValue5.replaceChild(img, icon5);
    iconValue5.appendChild(img)
 
    // 5th day temperature
    tempValue5.textContent = "Temp: " + (Math.round(data.list["32"].main.temp)) + "°F";
    // 5th day humidity
    humidityValue5.textContent = "Humidity: " + data.list["32"].main.humidity + "%";
   }
   
   updateForecast();
   storeSearches()
    
  })
  .catch(() => {
    currentDateValue.textContent = "Please search for a valid city.";
  });


  let queryURLDaily = "https://api.openweathermap.org/data/2.5/weather?q=" + inputVal + "&appid=" + APIKey + "&units=imperial";

  fetch(queryURLDaily)
   .then((response) => {
     return response.json();
   })
   .then((data) => {
 
     console.log(data);


    currentTempValue.textContent = "Temp: " +  (Math.round(data.main.temp)) + "°F";

    currentHumidityValue.textContent =  "Humidity: " + data.main.humidity + "%";

    currentWindSpeedValue.textContent = "Windspeed: " + data.wind.speed + " mph";


    // query url for UV index
    let lon = data.coord.lon;
    let lat = data.coord.lat;
    let queryURLUV = "http://api.openweathermap.org/data/2.5/uvi?appid=" + APIKey + "&lat=" + lat + "&lon=" + lon;
 
    fetch(queryURLUV)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
  
     currentUVIndexValue.textContent = "UV Index: " + data.value;
    
     if (data.value > 7) {
        //  change red
        currentUVIndexValue.style.backgroundColor = "red";
        currentUVIndexValue.style.color = "rgba(253, 253, 253, 0.801);";
     } else if (data.value < 7 && data.value > 5) {
        // change orange
        currentUVIndexValue.style.backgroundColor = "orange";
        currentUVIndexValue.style.color = "rgba(253, 253, 253, 0.801);";
     } else if (data.value < 5 && data.value > 3) {
        //  change yellow
        currentUVIndexValue.style.backgroundColor = "yellow";
        currentUVIndexValue.style.color = "rgba(253, 253, 253, 0.801);";
     } else if (data.value < 3) {
        //  change green
        currentUVIndexValue.style.backgroundColor = "green";
        currentUVIndexValue.style.color = "rgba(253, 253, 253, 0.801);";
     }
 
    });
 
   })
   .catch(() => {
    currentDateValue.textContent = "Please search for a valid city.";
  });
   
   
});
