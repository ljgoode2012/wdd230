const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const url = "https://api.openweathermap.org/data/2.5/weather?lat=64.8401&lon=147.7200&units=imperial&appid=e2e30e7d15e743523fc54c1bbdfcb1be";

async function apiFetch() {
    try {
        const response = await fetch(url)
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }
    } catch(error) {console.log(`Error: ${error.message}`);}
}

apiFetch();

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = capitalize(weatherData.weather[0].description);

    weatherIcon.src = iconsrc;
    weatherIcon.alt = desc;
    captionDesc.textContent = desc;
}

function capitalize(string) {
    let words = string.split(" ");
    const newWords = words.map(function (word) {
        let newWord = `${word.charAt(0).toUpperCase()}${word.slice(1)}`
        return newWord})
    let newString = newWords.join(" ")
    return newString
}
