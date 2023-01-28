window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.opacity=1
        },
        500
    );
    
})

document.querySelector("#close").addEventListener("click", function(){
    
    document.querySelector(".popup").style.opacity=0;

    setTimeout(
        function close(event){
            document.querySelector(".popup").style.display = "none" 
        }, 700
    )
});

document.querySelector("#menuBurger").addEventListener("click", function(){

    setTimeout(() => {document.querySelector(".navResponsive").style.display = "block";}, 100);
    setTimeout(() => {document.querySelector(".navResponsive").style.opacity = 1;}, 200);
    

})


document.querySelector("#closeMenu").addEventListener("click", function(){
    

    setTimeout(() => {document.querySelector(".navResponsive").style.opacity = 0;}, 100);
    setTimeout(() => {document.querySelector(".navResponsive").style.display = "none";},400);
})

window.addEventListener("scroll", function(){
    let ubicacionPrincipal = window.pageYOffset;
    let header = document.querySelector(".nav");
    header.classList.toggle("nav__scroll", window.scrollY > 550);
    let navScroll = document.querySelector(".nav__scroll");

    if (ubicacionPrincipal > 600) {
        navScroll.style.top = "0px";
    } else {
        navScroll.style.top = "-120px";
    }

})