const headerImg = document.querySelector(".intro img");
headerImg.addEventListener("mouseover", function(event){
    event.target.style.cssText = "opacity: 0.5; transform: scale(1.05); transition: 0.9s";
    
});
headerImg.addEventListener("mouseout", function(event){
    event.target.style.cssText = "opacity: 1; transform: scale(1); transition: 0.3s";
    
});
window.addEventListener("resize", function(){
    headerImg.style.display = "none";
    
});
const logoH1 = document.querySelector("h1");

const firstH2 = document.querySelector(".intro h2");

firstH2.addEventListener("click", function(event){
    event.target.style.color = "blue";
    event.stopPropagation();
});


const siteContainer = document.querySelector("body");
siteContainer.addEventListener("keydown", function(){
   logoH1.style.color = "red";
});

siteContainer.addEventListener("keyup", function(){
     logoH1.style.color = "black";
  });

siteContainer.addEventListener("click", function(event){
    event.target.style.background = "grey";

});

const paragraphs = document.querySelectorAll(".home p")


window.addEventListener("scroll",function(){
    paragraphs.forEach(function(currentValue){
        return currentValue.style.fontSize = "2.4rem";
    });}) 

