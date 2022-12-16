
//populating select options with fruit from json

let fruitURL = "https://brotherblazzard.github.io/canvas-content/fruit.json"

const fruits = fetchFruits(fruitURL)

async function fetchFruits(resource) {
    const response = await fetch(resource)
    if (response.ok) {
        const fruits = await response.json();
        fruits.forEach(fruit => populateOptions(fruit))
}}

function populateOptions(object) {
    const fruit1El = document.querySelector("#fruit1")
    const fruit2El = document.querySelector("#fruit2")
    const fruit3El = document.querySelector("#fruit3")

    generateOption(object.name, fruit1El);
    generateOption(object.name, fruit2El);
    generateOption(object.name, fruit3El);}

function generateOption(name, parentElement) {
    let newOption = document.createElement("option");
    newOption.setAttribute("value", name);
    newOption.textContent = name
    parentElement.appendChild(newOption)
}

//displays input values and nutritional information upon form submission

function displayResults() {
    const mainEl = document.querySelector("main")
    let fname = document.querySelector("#fname").value
    let email = document.querySelector("#email").value
    let phone = document.querySelector("#phone").value
    let fruit1 = document.querySelector("#fruit1").value
    let fruit2 = document.querySelector("#fruit2").value
    let fruit3 = document.querySelector("#fruit3").value
    let instructions = document.querySelector("textarea").value
    let choiceList = [fruit1, fruit2, fruit3]

    const sectionEl = document.createElement("section")
    mainEl.appendChild(sectionEl)
    sectionEl.setAttribute("class", "fresh-section")
    
    const h2 = document.createElement("h2")
    sectionEl.appendChild(h2)
    h2.textContent = "Your Order"
    
    const p1 = document.createElement("p")
    sectionEl.appendChild(p1)
    p1.innerHTML = `First Name: ${fname}`

    const p2 = document.createElement("p")
    sectionEl.appendChild(p2)
    p2.innerHTML = `Email: ${email}`

    const p3 = document.createElement("p")
    sectionEl.appendChild(p3)
    p3.innerHTML = `Phone Number: ${phone}`

    const fruit1El = document.createElement("p")
    fruit1El.innerHTML = `Choice Number 1: ${fruit1}`
    sectionEl.appendChild(fruit1El)

    const fruit2El = document.createElement("p")
    fruit2El.innerHTML = `Choice Number 2: ${fruit2}`
    sectionEl.appendChild(fruit2El)

    const fruit3El = document.createElement("p")
    fruit3El.innerHTML = `Choice Number 3: ${fruit3}`
    sectionEl.appendChild(fruit3El)

    if (instructions != "") {
        const instructionsEl = document.createElement("p")
        instructionsEl.innerHTML = `Instructions: ${instructions}`
        sectionEl.appendChild(instructionsEl)}

    addOrder()
    console.log(fruits)
}

function addOrder() {
    let numOrders = Number(window.localStorage.getItem("OrdersLS"))
    numOrders += 1;
    localStorage.setItem("OrdersLS", numOrders)}
