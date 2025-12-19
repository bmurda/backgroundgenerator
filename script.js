// These are the things you want to 'grab'
var css = document.querySelector("h3"); /*css = h3*/
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// "When this function runs, set the background of the body to linear-gradient to right (starting from left), using color1 on the left and color2 on the right. Then display that css value in text format."
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
}

// "When (not before, hence no () ) the user clicks on either color picker, run the function setGradient"
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

