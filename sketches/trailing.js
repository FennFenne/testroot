// !! PHOTOSENSITIVITY WARNING !!
/*
 * Title: Form Generator - PROJ 1
 * Author: Fenn Fenne
 * Date:  Feb 2026
 * Simple Description: Moving the mouse over the canvas creates dots that leave a slowly disappearing trail.
 * Instructions: Use the mouse to hover over the canvas and create dots at the cursor's location. Use the arrow keys to change the shape's size (UP/DOWN) and trail decay length (LEFT/RIGHT). Use the SPACE bar to switch the background's color between white and black.
 */

//defines how far apart circles are generated from each other
let spread = 12;
//array that holds all the circ objects
let circArr = [];
//holds hexadecimal codes for colors; can add to this to create more colors
let colors = [
  "#000000",
  "#da1616",
  "#2542ae",
  "#fda020",
  "#77e0e8",
  "#c97eec",
  "#8000bb",
  "#f53d8b",
  "#289124",
];
let selectColor = 0;
let brushSize = 40;
let trail = 84;
let bgShift = true;

function setup() {
  createCanvas(600, 600);
  //frameRate(50);
  //creates an object for each space according to the spread
  for (let x = 0; x <= width; x += spread) {
    for (let y = 0; y <= height; y += spread) {
      circArr.push(new circ(x, y));
    }
  }
}

function draw() {
  noCursor();
  if (bgShift) {
    background(255);
  } else {
    background(40);
  }
  noStroke();
  //function to show each circle every frame
  fill(colors[selectColor]);
  for (let each of circArr) {
    each.show();
  }
  //Gradient();
  //stroke(0);
  //strokeWeight(4);
}

class circ {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 10;
  }
  show() {
    this.expand();
    circle(this.x, this.y, this.size);
  }
  expand() {
    this.size = min(this.size * (trail / 100), 10);
    this.mouseDist = dist(mouseX, mouseY, this.x, this.y);
    if (this.mouseDist < brushSize) {
      this.size = max(this.size + 120 / (this.mouseDist + 30), 12);
    }
  }
}

function mouseClicked() {
  //basic if statements to make colors change
  if (selectColor == colors.length - 1) {
    selectColor = 0;
  } else {
    selectColor++;
  }
}

function keyPressed() {
  //i dont know if switch or case is a thing in p5 so this'll do || numbers were selected arbitrarily
  if (keyCode == UP_ARROW) {
    if (brushSize < 100) {
      brushSize += 5;
    }
  } else if (keyCode == DOWN_ARROW) {
    if (brushSize > 10) {
      brushSize -= 5;
    }
  }
  if (keyCode == LEFT_ARROW) {
    if (trail > 74) {
      trail -= 2;
    }
  } else if (keyCode == RIGHT_ARROW) {
    if (trail < 98) {
      trail += 2;
    }
  }
  if (keyCode == 32) {
    if (bgShift) {
      bgShift = false;
    } else if (!bgShift) {
      bgShift = true;
    }
  }
}

/*function Gradient() {
  //eugh, gross... this was kinda hastily made because i was bored and wanted to have fun
  fill(255, 50);
  rect(0, height * (3 / 4), width, height * (1 / 4));
  fill(255, 75);
  rect(0, 15 + height * (3 / 4), width, height * (1 / 4));
  fill(255, 100);
  rect(0, 30 + height * (3 / 4), width, height * (1 / 4));
  fill(255, 125);
  rect(0, 45 + height * (3 / 4), width, height * (1 / 4));
  fill(255, 150);
  rect(0, 60 + height * (3 / 4), width, height * (1 / 4));
  fill(255, 175);
  rect(0, 75 + height * (3 / 4), width, height * (1 / 4));
  fill(255, 200);
  rect(0, 90 + height * (3 / 4), width, height * (1 / 4));
  fill(255, 225);
  rect(0, 105 + height * (3 / 4), width, height * (1 / 4));
  fill(255);
  rect(0, 120 + height * (3 / 4), width, height * (1 / 4));
}
*/
