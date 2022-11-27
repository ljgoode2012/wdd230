let dataUrl = "https://ljgoode2012.github.io/wdd230/chamber/data/data.json"

const companies = fetchJSON(dataUrl)
console.log(companies)


async function fetchJSON(resource) {
    const response = await fetch(resource)
    if (response.ok) {
        const companies = await response.json();
        companies.forEach(company => displayCompanyCards(company))}
}

function displayCompanyCards (company) {
    const cards = document.querySelector(".cards")
    let card = document.createElement('section');
    let name_ = document.createElement("p");
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phoneNumber = document.createElement('p');
    let website = document.createElement('a');
    let membership = document.createElement("p");

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
    membership.textContent = `Membership: ${company.membership}`

    card.appendChild(name_)
    card.appendChild(logo)
    card.appendChild(address)
    card.appendChild(phoneNumber)
    card.appendChild(website)
    card.appendChild(membership)

    cards.appendChild(card)
}

// grid/list toggle buttons ----------------

const gridButton = document.querySelector("#grid-button")
const listButton = document.querySelector("#list-button")
const name_ = document.querySelectorAll(".company-name")
displayClass = document.querySelector(".cards")

gridButton.addEventListener("click", toggleGrid)
listButton.addEventListener("click", toggleList)

function toggleList() {
    displayClass.classList.add("cards-list")
    displayClass.classList.remove("cards-grid")

}
function toggleGrid() {
    displayClass.classList.remove("cards-list")
    displayClass.classList.add("cards-grid")

}








