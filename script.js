var info = document.querySelector('.Info');
var main = document.querySelector('.players')

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if(scroll>380){
        info.classList.add("fixed");
        main.classList.add("a");
    }else{
        info.classList.remove("fixed");
        main.classList.remove("a");
    }
});
