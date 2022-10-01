/*---------------------------------------API--------------------------------------------*/

const api = {
    key: "", /* <=== ENTER YOU API KEY WITHIN THE QUOTES*/
    base: "https://api.openweathermap.org/data/2.5/weather?",
}

/*-------------------FUNCTION TO DISPLAY DATE AND TIME USING MOMENT.JS-------------------*/

const date = moment();
document.getElementById("date").innerHTML = date.format("Mo MMM YYYY dddd, h:mm:ss");


/*-----------------------FUNCTION TO TAKE THE VALUES WHEN ENTERED------------------------*/

    const Input = document.getElementById('input');

    Input.addEventListener('keypress', (event) => {

    if(event.keyCode == 13) {
        getWeather(Input.value);  //passing the input value to getWeather function
        document.querySelector('.main-weather').style.display = "block"; //used to show the details as intially the display is set as none
    }
});

/*-------------------------------FUNCTION TO GET WEATHER--------------------------------*/


function getWeather(city) {
    fetch(`${api.base}q=${city}&appid=${api.key}&units=metric`)   // format for calling api is given on the web docs
                                                                  // units=metric used for celcius, if you remove it the temperature would be in Fahrenheit
    .then(details => {
        return details.json();  // Sending all details to showWeather function in form of json

    }).then(showWeather);
}

/*-------------------------------FUNCTION TO SHOW WEATHER--------------------------------*/


function showWeather(details){  //Taking the received values from API into this function

    // console.log(details);

    let city = document.getElementById('city');
    city.innerHTML = `${details.name}, ${details.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(details.main.temp)}&deg;C`; //Rounding off the temp using math function

    let minMax = document.getElementById('min-max');
    minMax.innerHTML = `${Math.round(details.main.temp_min)}&deg;C (Min) and ${Math.round(details.main.temp_max)}&deg;C (Max) `; //Rounding off the temp using math function

    let weatherType = document.getElementById('weather-type');
    weatherType.innerHTML = `${details.weather[0].main}`;
}

/*----------------------------------------------------------------------------------------*/

