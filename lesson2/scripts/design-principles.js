const date = new Date();
console.log(date)
const year = date.getFullYear();

const dynCopyright = document.querySelector(".copyright");
dynCopyright.innerHTML = `&copy ${year} | Lindsey Goode |`;

const timestamp = `Last Updated: ${document.lastModified}`;
document.querySelector(".lastMod").textContent = timestamp;