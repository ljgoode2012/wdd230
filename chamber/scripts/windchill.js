let temp = parseInt(document.querySelector("#temp").textContent)
let wSpeed = parseInt(document.querySelector("#wSpeed").textContent)
let wChill = document.querySelector("#wChill").textContent

function calWindchill () {
    if ((temp <= 50) && (wSpeed > 3)) {
        wChill = 35.74 + (0.6215 * temp) - (35.75 * (wSpeed**.16)) + (0.4275 * temp * (wSpeed**.16))
    }
    else {
        wChill = "N/A"
    }
}