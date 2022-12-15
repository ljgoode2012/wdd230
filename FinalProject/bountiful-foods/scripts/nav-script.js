window.onscroll = function() {toggleSticky()};
const nav = document.querySelector("nav");
const sticky = nav.offsetTop;

function toggleSticky() {
  if (window.pageYOffset >= sticky) {
    nav.classList.add("sticky")
  } else {
    nav.classList.remove("sticky");
  }}