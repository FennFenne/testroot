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
let start;
let choice = 0;
let blissId;
let vaporId;
let nixId;
let unionId;
let font;

function preload() {
 bliss = loadImage('Bliss.png');
 vapor = loadImage("vaporwave.png");
 nix = loadImage("nix.webp");
 union = loadImage("OhioUnionFront.JPG");
  font = loadFont("sketches/FENNESFONT.TTF");

}

function setup() {
  createCanvas(800, 600);
  frameRate(150);
  background(255)
  textFont(font);
  textSize(40);
  textAlign(CENTER);
  slider = document.getElementById("myRange");
sliderVal = slider.value;
chosenImg = bliss;
blissId = document.getElementById("bl");
vaporId = document.getElementById("va");
nixId = document.getElementById("nix");
unionId = document.getElementById("oh");
start = document.getElementById("start");

blissId.addEventListener("click", Bliss);
vaporId.addEventListener("click", Vaporwave);
nixId.addEventListener("click", Nix);
unionId.addEventListener("click", Union);
start.addEventListener("click", Runner);

}

function draw() {
  if (isRunning == true){
  background(220);
  image(chosenImg, 0, 0);
  for(let i = 0; i < prec; i++){
    chosenImg.pixels[(i*4) + (prec * tick)] = modR[tick];
    chosenImg.pixels[(i*4) + (prec * tick) + 1] = modG[tick];
    chosenImg.pixels[(i*4) + (prec * tick) + 2] = modB[tick];
  }
  chosenImg.updatePixels();
  if(tick == (800 * 600 * 4)/prec){
    noLoop();
  }
  tick++;
}
else{
    sliderVal = slider.value;
    background(255);
text("Precision: " + sliderVal, 200, 180);
text("Image to Simplify: " + helpme, 200, 240);
}
}
function chooseImg() {

  chosenImg.resize(800, 600);
  chosenImg.loadPixels();
  
  for(let i = 0; i <= chosenImg.pixels.length; i += prec){
    console.log(i);
    modR[i/prec] = chosenImg.pixels[i];
    modG[i/prec] = chosenImg.pixels[i+1];
    modB[i/prec] = chosenImg.pixels[i+2];
  }
}
function Bliss(){
if(!isRunning){
helpme = "bliss";
  chosenImg = bliss;
}
}

function Vaporwave() {
  if(!isRunning){
helpme = "vapor";
  chosenImg = vapor;
  }
}

function Nix() {
  if(!isRunning){
helpme = "nix";
  chosenImg = nix;
  }
}

function Union() {
  if(!isRunning){
helpme = "union";
  chosenImg = union;
  }
}

function Runner() {
  prec = int(sliderVal);
  chooseImg();
  document.getElementById('start').remove();
  isRunning = true;
}