const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const close_menu = document.querySelector("#close_menu");
const menuTag = document.querySelector("#menu ul li")


// open menu 
hamburger.addEventListener("click", () => {
    menu.style.display = "block"

})

// close menu 
function closeMenu () {
    menu.style.display = "none"
}

close_menu.addEventListener("click", () => {
    closeMenu()
})


