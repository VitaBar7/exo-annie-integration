let menuBurger = document.querySelector(".menu_burger")
let sideMenu = document.querySelector(".side_menu")

menuBurger.addEventListener("click", e => {
    sideMenu.classList.toggle("active")

})

// je stock l'icone pour lancer une surveillance au survol
let login = document.querySelector(".login")

//je stock le logo pour le faire disparaitre au survol de login
let logo = document.querySelector(".logo")

/*login.addEventListener("mouseover", e => {
    logo.style.display = 'none'
})*/