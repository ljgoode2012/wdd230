window.onscroll = function() {toggleSticky()};
const nav = document.querySelector("nav");
const sticky = nav.offsetTop;

function toggleSticky() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky");
  }}

function toggleMenu() {
  document.querySelector("#primaryNav").classList.toggle("open");
}

const menuBtn = document.getElementById("hamburgerBtn")
menuBtn.onclick = toggleMenu

// Last Modified date and copyright year

const date = new Date();
const year = date.getFullYear();
const dynCopyright = document.querySelector(".year");
dynCopyright.innerHTML = `${year}`;

const timestamp = `Last Updated: ${document.lastModified}`;
document.querySelector(".lastMod").textContent = timestamp;
