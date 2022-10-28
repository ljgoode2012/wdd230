function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;

const date = new Date();

const year = date.getFullYear();

const dynCopyright = document.querySelector(".copyright");
dynCopyright.innerHTML = `${year}`;

const timestamp = `Last Updated: ${document.lastModified}`;
document.querySelector(".lastMod").textContent = timestamp;

const datefield = document.querySelector(".date");

const fulldate = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(date);
datefield.innerHTML = `${fulldate}`



const banner = document.querySelector("#banner");
let day = date.getDay();

if ((day === 1) || (day === 2)) {banner.style.display = "block"}
else {banner.style.display = "none"}