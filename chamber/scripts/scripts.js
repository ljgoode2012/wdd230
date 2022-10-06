function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;

const date = new Date();
console.log(date)
const year = date.getFullYear();

const dynCopyright = document.querySelector(".copyright");
dynCopyright.innerHTML = `${year}`;

const timestamp = `Last Updated: ${document.lastModified}`;
document.querySelector(".lastMod").textContent = timestamp;

const datefield = document.querySelector(".date");

const fulldate = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(date);
datefield.innerHTML = `${fulldate}`
console.log("${fulldate}")