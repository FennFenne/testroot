/*
* Title: Image Simplifier - Project 3
* Author: Fenn Fenne
* Date:  Mar 2026
* Simple Description:
* Instructions: N/A
*/

let bliss;
let chosenImg;
//lower number for prec means HIGHER precision. 1 is "ultra precise", 1000 is "next to no precision"
let prec = 200;
let modR = [];
let modG = [];
let modB = [];
let tick = 0;
let isRunning = false;
let slider;
let sliderVal;
let vapor;
let nix;
let union;
let helpme = "bliss";

function preload() {
 bliss = loadImage('Bliss.png');
 vapor = loadImage("vaporwave.png");
 nix = loadImage("nix.webp");
 union = loadImage("OhioUnionFront.JPG");
}

function setup() {
  createCanvas(800, 600);
  frameRate(150);
  background(255)
  slider = document.getElementById("myRange");
sliderVal = slider.value;
/*bliss = document.getElementById("bl");
vapor = document.getElementById("va");
nix = document.getElementById("nix");
union = document.getElementById("oh");

bliss.addEventListener("click", Bliss);
vapor.addEventListener("click", Vaporwave);
nix.addEventListener("click", Nix);
union.addEventListener("click", Union);*/
}

/*function draw() {
  if (isRunning == true){
  background(220);
  image(chosenImg, 0, 0);
  for(let i = 0; i < prec; i++){
    chosenImg.pixels[(i*4) + (prec * tick)] = 0;
    chosenImg.pixels[(i*4) + (prec * tick) + 1] = modG[tick];
    chosenImg.pixels[(i*4) + (prec * tick) + 2] = modB[tick];
  }
  chosenImg.updatePixels();
  if(tick == (width * height * 4)/prec){
    noLoop();
  }
  tick++;
}
else{
    sliderVal = slider.value;
    background(255);
text("Precision: " + sliderVal, 200, 200);
text("Image to Simplify: " + helpme, 200, 250);
}
}
function chooseImg() {

  chosenImg.resize(width, height);
  chosenImg.loadPixels();
  
  for(let i = 0; i <= chosenImg.pixels.length; i += prec){
    modR[i/prec] = chosenImg.pixels[i];
    modG[i/prec] = chosenImg.pixels[i+1];
    modB[i/prec] = chosenImg.pixels[i+2];
  }
}
function Bliss(){
helpme = "bliss";
  chosenImg = bliss;
}

function Vaporwave() {
helpme = "vapor";
  chosenImg = vapor;

}

function Nix() {
helpme = "nix";
  chosenImg = nix;

}

function Union() {
helpme = "union";
  chosenImg = union;

}
*/
