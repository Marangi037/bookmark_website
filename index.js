const details = document.getElementById("detail")
const chevrons = document.querySelector(".chevrons")


const initApp = () => {
    const mobileMenu = document.getElementById("mobile-menu")
    const hamburgerBtn = document.getElementById("hamburger-btn")



    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        hamburgerBtn.classList.toggle('toggle-btn')

    }
    hamburgerBtn.addEventListener("click", toggleMenu)
    mobileMenu.addEventListener("click", toggleMenu)

}
    


document.addEventListener("DOMContentLoaded", initApp);

details.addEventListener("click", () => {
    console.log("dfghj")
}
)

