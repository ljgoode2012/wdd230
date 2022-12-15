const weatherURL = "https://api.openweathermap.org/data/2.5/weather?lat=41.6662&lon=81.3396&units=imperial&appid=e2e30e7d15e743523fc54c1bbdfcb1be";
const temperatureEl = document.querySelector("#temp")
const conditionEl = document.querySelector("#condition")
const wSpeedEl = document.querySelector("#wSpeed")
const wChillEl = document.querySelector("#wChill")
const iconEl = document.querySelector("#icon")

weatherFetch()

async function weatherFetch() {
    try {
        const response = await fetch(weatherURL)
        if (response.ok) {
            const data = await response.json();
            array = pullResults(data);
            setElements(array);

        }
    } catch(error) {console.log(`Error: ${error.message}`);}
}

function pullResults(weatherData) {
    let temperature = Math.round(weatherData.main.temp)
    let wSpeed = weatherData.wind.speed
    let wChillResult = calWindchill(temperature, wSpeed)
    let condition = capitalize(weatherData.weather[0].description);
    let icon = weatherData.weather[0].icon
    return [temperature, wSpeed, wChillResult, condition, icon]
}
 
function setElements(array) {
    temperatureEl.textContent = array[0]
    wSpeedEl.textContent = array[1]
    wChillEl.textContent = array[2]
    conditionEl.textContent = array[3]
    iconEl.setAttribute("src", `https://openweathermap.org/img/wn/${array[4]}@2x.png`)
    iconEl.alt = array[3]
}

function calWindchill(temperature, wSpeed) {
    if ((temperature <= 50) && (wSpeed > 3)) {
        wChill = Math.round(35.74 + (0.6215 * temperature) - (35.75 * (wSpeed**.16)) + (0.4275 * temperature * (wSpeed**.16)))
        return wChill
    }
    else {
        return "N/A"
    }
}

function capitalize(string) {
    let words = string.split(" ");
    const newWords = words.map(function (word) {
        let newWord = `${word.charAt(0).toUpperCase()}${word.slice(1)}`
        return newWord})
    let newString = newWords.join(" ")
    return newString
}