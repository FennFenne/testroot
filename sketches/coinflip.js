
let coin = [];
//These randomize the speed of the active coin rotation
let randomHead = ["2160", "1080", "1440", "1800"];
let randomTail = ["2340", "1260", "1620", "1980"];
//part of randomization
let bool = [true, false];
let face;
let isFlipping = false;
let headCount = 0;
let tailCount = 0;
let sideUp = 0;
let spin;
let rotIndex = 0;
let activeSpin = 0;
let endSpin = 0;
let font;
let hStreakCount = 0;
let tStreakCount = 0;


function preload() {
//gotta load up the fonts and images
  coin[0] = loadImage('sketches/heads.png');
  coin[1] = loadImage("sketches/tails.png");
  font = loadFont("sketches/FENNESFONT.TTF");
}

function setup() {
//WEBGL for 3D rotation
  createCanvas(400, 400, WEBGL);
  for (let i = 0; i <= 1; i++) {
    coin[i].resize(0, 400);
  }
  angleMode(DEGREES);
  //frameRate(15);
}

function draw() {
  background(240);
  face = random(bool);
  fill('purple');
  textFont(font);
  textSize(36);
//complete chaos, i wrote this in the zone and it works i think?
  push(); //this is so the text *does not rotate* and remains static
  if (isFlipping == false) {
//a simple static rotation, swapping sides as it spins around
    spin = frameCount;
    rotIndex++;
    if (rotIndex == 90) {
      sideUp = 1;
    }
    if (rotIndex == 270) {
      sideUp = 0;
    }
    if (rotIndex == 360) {
      rotIndex = 0;
    }
    rotateY(spin);
  }
  if (isFlipping == true) {
    activeSpin = lerp(activeSpin, endSpin, 0.05);
    rotIndex = activeSpin;
    rotateY(activeSpin);
    console.log(activeSpin);
    if (activeSpin >= endSpin - 1) {
      if (sideUp == 0) {
        activeSpin = 0;
        if(endSpin != 0){
          headCount++;
          hStreakCount++;
          tStreakCount = 0;
        }
        endSpin = 0;
        if (frameCount % 360 == 0) {
          isFlipping = false;
          rotIndex = 0;
        }
      }
      if (sideUp == 1) {
        activeSpin = 180;
        if (endSpin != 180){
          tailCount++;
          tStreakCount++;
          hStreakCount = 0;
        }
        endSpin = 180;
        if (frameCount % 360 == 180) {
          isFlipping = false;
          rotIndex = 180;
        }
      }
    }
  }
  texture(coin[sideUp]);
  circle(0, 0, 275);
  //image(coin[sideUp], -150, -150);
  pop();
  text("Heads: " + headCount, -200, 155);
  fill("red");
  text("Tails: " + tailCount, -200, 190);

  if (activeSpin >= endSpin - 1 && isFlipping == true){
    textSize(60);
    if(sideUp == 0) {
      fill("purple");
      text("Heads!", -79, -150);
    }
    else {
      fill("red");
      text("Tails!", -75, -150);
    }
  }
  textSize(36);
    if(hStreakCount > 1){
      fill("purple")
      text("Streak: " + hStreakCount, 30, 190);
    }
    if(tStreakCount > 1){
      fill("red")
      text("Streak: " + tStreakCount, 30, 190);
    }
}

function mouseClicked() {
  if (isFlipping == false) {
    rotIndex = 0;
    if (face == true) {
      endSpin = random(randomHead);
      sideUp = 0;
    }
    if (face == false) {
      endSpin = random(randomTail);
      sideUp = 1;
    }
    isFlipping = true;
  }
}
