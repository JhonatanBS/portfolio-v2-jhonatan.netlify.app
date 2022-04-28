const botao = document.querySelector(".hamburguer");
const iconeBotao = document.querySelector(".fa-bars");

function hamburger(){
    const menu = document.querySelector(".menu");
    menu.classList.toggle("ative");
    
    if(iconeBotao.classList.contains("fa-bars")){
        iconeBotao.classList.remove("fa-bars");
        iconeBotao.classList.add("fa-rectangle-xmark");
    }
    else if(iconeBotao.classList.contains("fa-rectangle-xmark")){
        iconeBotao.classList.remove("fa-rectangle-xmark");
        iconeBotao.classList.add("fa-bars");
    }
}

botao.addEventListener("click", hamburger);