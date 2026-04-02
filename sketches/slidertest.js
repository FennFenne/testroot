let slider;
let sliderVal;
let bliss;
let vapor;
let nix;
let union;
let helpme = "bliss";

function preload() {

}
function setup() {
createCanvas(400, 400);
slider = document.getElementById("myRange");
sliderVal = slider.value;
bliss = document.getElementById("bl");
vapor = document.getElementById("va");
nix = document.getElementById("nix");
union = document.getElementById("oh");

bliss.addEventListener("click", Bliss);
vapor.addEventListener("click", Vaporwave);
nix.addEventListener("click", Nix);
union.addEventListener("click", Union);
}

function draw() {
    sliderVal = slider.value;
    background(255);
text("Precision: " + sliderVal, 200, 200);
text("Image to Simplify: " + helpme, 200, 250);
}

function Bliss(){
helpme = "bliss";
}

function Vaporwave() {
helpme = "vaporwave";
}

function Nix() {
helpme = "nix";
}

function Union() {
helpme = "union";
}
