const header = document.querySelector(".header__top")

function handleScroll() {
    if (window.scrollY > header.offsetHeight){
        header.classList.add("fixed")
    }else{
        header.classList.remove("fixed")
    }
}

window.addEventListener("scroll", handleScroll)