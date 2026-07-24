window.addEventListener("scroll",()=>{

const navbar=document.getElementById("navbar");

if(window.scrollY>40){

navbar.classList.add("scrolled");

}

else{

navbar.classList.remove("scrolled");

}

});
window.addEventListener("scroll", function(){

    const navbar = document.getElementById("navbar");

    navbar.classList.toggle("scrolled", window.scrollY > 30);

});