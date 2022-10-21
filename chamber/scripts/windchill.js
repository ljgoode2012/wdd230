let temp = parseInt(document.querySelector("#temp").textContent)
let wSpeed = parseInt(document.querySelector("#wSpeed").textContent)
let wChillElement = document.querySelector("#wChill")

calWindchill()

function calWindchill() {
    console.log("entered function")
    if ((temp <= 50) && (wSpeed > 3)) {
        wChill = Math.round(35.74 + (0.6215 * temp) - (35.75 * (wSpeed**.16)) + (0.4275 * temp * (wSpeed**.16)))
        console.log(wChill)
        wChillElement.textContent = wChill
    }
    else {
        wChillElement.textContent = "N/A";
    }
}