const url = "https://ljgoode2012.github.io/wdd230/chamber/data/data.json"

const companies = fetchJSON(url)
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
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phoneNumber = document.createElement('p');
    let website = document.createElement('a');
    let membership = document.createElement("p");

    logo.setAttribute("src", `${company.imageFile}`)
    logo.setAttribute("style", "width:100%")
    logo.setAttribute("alt", `${company.name} logo`)
    logo.setAttribute("loading", "lazy")
    website.setAttribute("href", `${company.websiteURL}`)
    address.textContent = company.address
    phoneNumber.textContent = company.phoneNumber
    website.textContent = company.websiteURL
    membership.textContent = `Membership: ${company.membership}`

    card.append(logo)
    card.append(address)
    card.append(phoneNumber)
    card.append(website)
    card.append(membership)

    cards.appendChild(card)
}






