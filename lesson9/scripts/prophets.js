const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
    .then(function (response) {
        return response.json()
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const prophets = jsonObject["prophets"];
        prophets.forEach(displayProphets);
    })



function displayProphets(prophet) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let birthdate = document.createElement('p');
    let birthplace = document.createElement('p');

    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname} - ${ordinal(prophet.order)} Latter-day President`);
    portrait.setAttribute("loading", "lazy")
    birthdate.textContent = `Date of Birth: ${prophet.birthdate}`
    birthplace.textContent = `Place of Birth: ${prophet.birthplace}`
    
    card.appendChild(h2);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(portrait);
    
    document.querySelector("div.cards").appendChild(card);
}

function ordinal(n) {
    const s = ["th", "st", "nd", "rd"];
    let v = n%100;
    console.log(v)
    return n + (s[(v-20)%10] || s[v] || s[0]);
}