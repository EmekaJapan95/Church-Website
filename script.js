// Dark Mode

const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
document.body.classList.toggle("dark");
});

// Scroll Animation

function reveal() {

const reveals =
document.querySelectorAll(".reveal");

reveals.forEach(item => {

const windowHeight =
window.innerHeight;

const top =
item.getBoundingClientRect().top;

if(top < windowHeight - 100){
item.classList.add("active");
}

});

}

window.addEventListener("scroll", reveal);

reveal();

// Smooth Scroll

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(
this.getAttribute("href")
).scrollIntoView({
behavior:"smooth"
});

});

});
