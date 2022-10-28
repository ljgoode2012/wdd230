// lazy loading
let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    }
}

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        })
    })
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    })
}

//visits in local storage
const visitsDisplay = document.querySelector(".visits-display");

let numVisits = Number(window.localStorage.getItem("visitsLS"));

if (numVisits > 1) {
    visitsDisplay.textContent = `Welcome Back! You have visited this page ${numVisits} times before.`
}
else if (numVisits ==1) {
    visitsDisplay.textContent = `Welcome Back! You have visited this page ${numVisits} time before.`
}
else {visitsDisplay.textContent = "Welcome! This is your first time visiting this page."
}

numVisits++;
localStorage.setItem("visitsLS", numVisits);