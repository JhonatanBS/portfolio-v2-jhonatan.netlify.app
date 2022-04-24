var scrollBtn = document.querySelector(".btn-scroll");

window.addEventListener("scroll", function(){
    scrollBtn.classList.toggle("ativado", this.window.scrollY >= 1153 && this.window.scrollY  <= 4036)
});