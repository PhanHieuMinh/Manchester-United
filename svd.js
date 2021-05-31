
var svd = document.querySelector('.svd')
var info2 = document.querySelector('.Info3')





window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    if(scroll>300){
        info2.classList.add("fixed2");
        svd.classList.add("a2");
    }else{
        info2.classList.remove("fixed2");
        svd.classList.remove("a2");
    }
});
