var nav = document.getElementById("nav");
var section1 = document.getElementById("section-1");
var header2 = document.getElementById("header-2");
var header1 = document.querySelector(".header-1");

function cachNav() {
    if (nav.style.display === "flex") {
      nav.style.display = "none";
    } else {
      nav.style.display = "flex";
    }
}

document.getElementById("humb-x").addEventListener("click", cachNav);
window.addEventListener('resize', function() {	
	var viewport_width = window.innerWidth;
	var viewport_height = window.innerHeight;
    if (viewport_width >= 565){
        nav.style.display = "flex";
    } else {
        nav.style.display = "none";
    }
});
window.addEventListener("scroll", function(){
    let width = 85;
    
    header2.classList.toggle("fixed", window.scrollY > width);
})