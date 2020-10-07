/*
let links = document.querySelectorAll("a");

links.forEach(function(link){
    console.log(link);
});
*/

let links = document.querySelectorAll(".close");

links.forEach(function(link){
    link.addEventListener("click",function(ev){

        ev.preventDefault();
        let content = document.querySelector(".content");

        // Quitar animacion
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");

        // Agregar animacion
        content.classList.add("animate__animated");
        content.classList.add("animate__fadeOutUp");
        
        //Tiempo animacion volver a la pagina principal
        setTimeout(function(){
            location.href = "../index.html";
        },600);
    
        return false;
    });
});







