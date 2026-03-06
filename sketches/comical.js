/*
 * Title: Comical Timing (Experimental Clock) - Project 2
 * Author: Fenn Fenne
 * Date: Mar 2026
 * Simple Description: A minimalist 4 panel comic strip. From top to bottom, left to right, the first panel changes every hour. The second panel changes every other second. The third panel changes every minute. The four panel changes every half hour.
 * In list:
 * First Panel: Every Hour
 * Second Panel: Every Other Second
 * Third Panel: Every Minute
 * Fourth Panel: Every Half Hour
 * Instructions: Let time pass. Click on the canvas to pause the screen and interpret the comic.
 */

let customOn = false;
let customHour;
let customMin;
let customSec;

let hours;
let minutes;
let seconds;
let halfhours;
let randState = ["up", "down", "gone", "up", "down"];

let hourArray = [];
let minuteArray = [];
let secondArray = [];
let halfhourArray = [];

let isPaused = false;

function preload() {}

function setup() {
  var cnv = createCanvas(600, 600);
  cnv.parent('stayinplaceplz');
  const btn = document.getElementById('printer');
  btn.addEventListener("click", Screenshot);
  for(let i=0; i<24; i++){
    hourArray.push(new loss(110, 250, 170, 250));
  }
  for(let i=0; i<48; i++){
    halfhourArray.push(new loss(410, 550, 470, 550));
  }
  for(let i=0; i<60; i++){
    minuteArray.push(new loss(110, 550, 170, 550));
    secondArray.push(new loss(410, 250, 470, 250));
  }
}

function draw() {
  background(225);
  hours = hour();
  minutes = minute();
  seconds = floor(second() / 2);
  halfhours = hours * 2;
  if(minutes >= 30){
    halfhours++;
  }
  strokeWeight(10);
  line(300, 0, 300, 600);
  line(0, 300, 600, 300);
  strokeWeight(6);
  hourArray[hours].show();
  halfhourArray[halfhours].show();
  minuteArray[minutes].show();
  secondArray[seconds].show();
}

class loss {
  constructor(anchorX1, anchorY1, anchorX2, anchorY2) {
    this.anchorX1 = anchorX1;
    this.anchorY1 = anchorY1;
    this.anchorX2 = anchorX2;
    this.anchorY2 = anchorY2;
    this.state1 = random(randState);
    this.state2 = random(randState);
    if (this.state1 == "up") {
      this.randY1 = this.anchorY1 - randomGaussian(100, 15);
      this.randX1 = this.anchorX1;
    } else if (this.state1 == "down") {
      this.randY1 = this.anchorY1;
      this.randX1 = this.anchorX1 - randomGaussian(80, 5);
    } else {
      this.randY1 = this.anchorY1;
      this.randX1 = this.anchorX1;
    }

    if (this.state2 == "up") {
      this.randY2 = this.anchorY2 - randomGaussian(100, 15);
      this.randX2 = this.anchorX2;
    } else if (this.state2 == "down") {
      this.randY2 = this.anchorY2;
      this.randX2 = this.anchorX2 + randomGaussian(80, 5);
    } else {
      this.randY2 = this.anchorY2;
      this.randX2 = this.anchorX2;
    }
  }
  show() {
    if(this.state1 != "gone"){
     beginShape(LINES);
      vertex(this.anchorX1, this.anchorY1);
      vertex(this.randX1, this.randY1);
     endShape();
    }

    if(this.state2 != "gone"){
     beginShape(LINES);
      vertex(this.anchorX2, this.anchorY2);
      vertex(this.randX2, this.randY2);
     endShape();
    }
  }
}

function mouseClicked(){
  if(!isPaused){
    noLoop();
    isPaused = true;
  }
  else if(isPaused){
    loop();
    isPaused = false;
  }
}

function Screenshot() {
  //save('comicaltiming.png');
  document.getElementById('printer').remove();
}