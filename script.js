var info = document.querySelector('.Info');
var main = document.querySelector('.players')
var svd = document.querySelector('.svd')
var info2 = document.querySelector('.Info3')

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



window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if(scroll>380){
        info2.classList.add("fixed2");
        svd.classList.add("a2");
    }else{
        info2.classList.remove("fixed2");
        svd.classList.remove("a2");
    }
});
