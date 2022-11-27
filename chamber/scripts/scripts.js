// hamburger button nav toggle ------------------------

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;

// date for copyright and timestamp in footer ----------
const date = new Date();
const year = date.getFullYear();
const dynCopyright = document.querySelector(".copyright");
dynCopyright.innerHTML = `${year}`;
const timestamp = `Last Updated: ${document.lastModified}`;
document.querySelector(".lastMod").textContent = timestamp;
const datefield = document.querySelector(".date");
const fulldate = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(date);
datefield.innerHTML = `${fulldate}`

// date used to determine banner display for meeting------
const banner = document.querySelector("#banner");
let day = date.getDay();
if ((day === 1) || (day === 2)) {banner.style.display = "block"}
else {banner.style.display = "none"}

// populating the random spotlights --------------------

//variables and arrays ---------
let url = "https://ljgoode2012.github.io/wdd230/chamber/data/data.json"
const spotlight1 = document.querySelector(".spotlight1")
const spotlight2 = document.querySelector(".spotlight2")
const spotlight3 = document.querySelector(".spotlight3")
const elements =[spotlight1, spotlight2, spotlight3]
const ranNumbers = []
const loopTime = 3
while (ranNumbers.length < 3){
    for (let i = 0; i < loopTime; i++) {
        let ran_num = Math.floor(Math.random() * 9);
        if (!ranNumbers.includes(ran_num)) {
            ranNumbers.push(ran_num)
        }}}
const spotlightedCompanies = []

// functions --------------------------

async function fetchJSON(resource) {
    const response = await fetch(resource)
    if (response.ok) {
        const companies = await response.json();
        ranNumbers.forEach(number =>
            spotlightedCompanies.push(companies[number]))
        for (let i = 0; i < loopTime; i++){
            fillContent(spotlightedCompanies[i], elements[i])}}}

function fillContent(company, element) {
    let name_ = document.createElement("h2");
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phoneNumber = document.createElement('p');
    let website = document.createElement('a');

    

    name_.textContent = company.name
    name_.classList.add("company-name")
    logo.setAttribute("src", `${company.imageFile}`)
    logo.setAttribute("style", "width:100%")
    logo.setAttribute("alt", `${company.name} logo`)
    logo.setAttribute("loading", "lazy")
    website.setAttribute("href", `${company.websiteURL}`)
    address.textContent = company.address
    phoneNumber.textContent = company.phoneNumber
    website.textContent = company.websiteURL

    element.appendChild(name_)
    element.appendChild(logo)
    element.appendChild(address)
    element.appendChild(phoneNumber)
    element.appendChild(website)
}

// run code --------------

fetchJSON(url)