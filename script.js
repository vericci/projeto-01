//Aqui adicionamos um evento de escutar o click do Mouse sobre o ícone de Hamburguer.
hamburgerButton.addEventListener("click", function() {
    mobileMenu.classList.add("flex");
    //Criamos uma função que a ouvir o click do Mouse, ele adicione uma Class, que está fazendo nossa caixa (Div) aparecer, ou seja, ficar visível.
});

//criamos uma função que a ouvir o click do mouse, ele REMOVE uma Class, que esta fazendo nossa caixa (div) desaparecer, ou seja, ficar invisivel.
closeButton.addEventListener("click",function(){
    mobileMenu.classList.remove("flex");
});