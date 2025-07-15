var navContainer = document.getElementById("menu")
var btn = document.getElementById("toggle")

function toggleMenu() {
    navContainer.classList.toggle('active')
}

btn.addEventListener('click', toggleMenu)

var navLinks = document.getElementsByClassName("navlink")

console.log(navLinks)

var i; 
for(i = 0; i < navLinks.length; i++) { 

    navLinks[i].addEventListener('click', toggleMenu)
}