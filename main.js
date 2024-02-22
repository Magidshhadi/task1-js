const btn =document.querySelector(".btn");
const slide =document.querySelector(".slide");
const all=document.querySelector(".all");
btn.onclick = function() {
 slide.classList.toggle("appear");
 all.classList.toggle("overlay");

}