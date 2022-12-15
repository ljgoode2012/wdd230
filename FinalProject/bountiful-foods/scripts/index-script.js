// Last Modified date and copyright year

const date = new Date();
const year = date.getFullYear();
const dynCopyright = document.querySelector(".year");
dynCopyright.innerHTML = `${year}`;

const timestamp = `Last Updated: ${document.lastModified}`;
document.querySelector(".lastMod").textContent = timestamp;

// Weather APIs
const lattitude = 33.16
const longitude = -117.35
const APIkey = "e2e30e7d15e743523fc54c1bbdfcb1be"
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lattitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
const currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lattitude}&lon=${longitude}&units=imperial&appid=${APIkey}`

//current weather data

fetchCurrent()

async function fetchCurrent() {
    try {
        const response = await fetch(currentURL)
        if (response.ok) {
            const data = await response.json();
            let array = pullResults(data);
            setElements(array);

        }
    } catch(error) {console.log(`Error: ${error.message}`);}
}

function pullResults(weatherData) {
    let temperature = Math.round(weatherData.main.temp)
    let condition = capitalize(weatherData.weather[0].description);
    let humidity = weatherData.main.humidity
    return [temperature, condition, humidity]
}

function setElements(array) {
    const tempEl = document.querySelector("#current-temp")
    const conditionEl = document.querySelector(".condition")
    const humidityEl = document.querySelector(".humidity")

    tempEl.textContent = array[0]
    conditionEl.textContent = array[1]
    humidityEl.textContent = array[2]
}

function capitalize(string) {
    let words = string.split(" ");
    const newWords = words.map(function (word) {
        let newWord = `${word.charAt(0).toUpperCase()}${word.slice(1)}`
        return newWord})
    let newString = newWords.join(" ")
    return newString
}

// forecasted weather data

fetchForecast()

let forecastDays = getDays()
console.log(forecastDays)
const day1El = document.querySelector("#day1Name")
const day2El = document.querySelector("#day2Name")
const day3El = document.querySelector("#day3Name")
displayDay(forecastDays, 1, day1El)
displayDay(forecastDays, 2, day2El)
displayDay(forecastDays, 3, day3El)


async function fetchForecast() {
    try {
        const response = await fetch(forecastURL)
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            let array = listForecast(data);
            displayForecast(array);

        }
    } catch(error) {console.log(`Error: ${error.message}`);}
}

function listForecast(data) {
    let day1 = data.list[5].main.temp
    let day2 = data.list[13].main.temp
    let day3 = data.list[21].main.temp
    return [day1, day2, day3]
}

function displayForecast(array) {
    const day1Temp = document.querySelector("#day1-temp")
    const day2Temp = document.querySelector("#day2-temp")
    const day3Temp = document.querySelector("#day3-temp")

    day1Temp.textContent = array[0]
    day2Temp.textContent = array[1]
    day3Temp.textContent = array[2]
}

function getDays() {
    let date = new Date
    let day = date.getDay()
    let currentDay = (day + 1) % 7
    console.log(currentDay)
    let day1 = getNextDay(currentDay)
    let day2 = getNextDay(day1)
    let day3 = getNextDay(day2)
    return [day1, day2, day3]
}

function getNextDay(day) {
    let nextDay = (day + 1) % 7
    return nextDay
}

function displayDay(array, number, element) {
    console.log(array[(number-1)])    
    switch (array[(number-1)]) {
        case 1:
            element.textContent = "Sunday";
            break;
        case 2:
            element.textContent = "Monday";
            break;
        case 3:
            element.textContent = "Tuesday";
            break;
        case 4:
            element.textContent = "Wednesday";
            break;
        case 5:
            element.textContent = "Thursday";
            break;
        case 6:
            element.textContent = "Friday";
            break;
        case 0:
            element.textContent = "Saturday";
    }}

//Orders counter - keeps track of total amount of orders in local storage

let numOrders = Number(window.localStorage.getItem("OrdersLS"))
let display = document.querySelector(".orders-display")

if (numOrders < 1 || numOrders == null) {
    display.innerHTML = "It looks like you haven't created a custom drink yet. <a href='fresh.html'>Give it a try!</a>";
}
else if (numOrders == 1) {
    display.innerHTML = `You have ordered a total of ${numOrders} drink. Thank you!`;
}
else if (numOrders > 1) {
    display.innerHTML = `You have ordered a total of ${numOrders} drinks. Thank you!`;
}