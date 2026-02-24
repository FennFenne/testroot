let stamp;
let stampColor;

function setup() {
  //starting by creating canvas
  createCanvas(400, 500);
  //stamp overlays over bg :D
  stamp = createGraphics(400, 500);
  stampColor = color(255, 255, 255);
}

function draw() {
  //looping bg to keep one circle as cursor
  background(210);
  //stamp setting goes BEFORE cursor so cursor shows above stamp
  fill(stampColor);
  noStroke();
  image(stamp, 0, 0);
  if (mouseY < 375) {
    noCursor();
    circle(mouseX, mouseY, 30);
  } else {
    cursor(CROSS);
  }
  //there HAS to be a better way to organize this, right????
  fill(0);
  rect(0, 375, 400, 25);
  fill(230);
  stroke(0);
  strokeWeight(2);
  rect(0, 400, 400, 100);
  fill(255, 0, 0);
  rect(297, 400, 25);
  fill(0, 255, 0);
  rect(323, 400, 25);
  fill(0, 0, 255);
  rect(349, 400, 25);
  fill(255, 255, 255);
  rect(375, 400, 25);
}

function mousePressed() {
  stamp.noStroke();
  stamp.fill(stampColor);
  //adds circle to stamp overlay
  if (mouseY < 375) {
    stamp.circle(mouseX, mouseY, 30);
  } else {
    //COLORSSSSSS
    if (mouseX >= 297 && mouseX <= 322 && mouseY >= 400 && mouseY <= 425) {
      stampColor = color(255, 0, 0);
    }
    if (mouseX >= 323 && mouseX <= 348 && mouseY >= 400 && mouseY <= 425) {
      stampColor = color(0, 255, 0);
    }
    if (mouseX >= 349 && mouseX <= 374 && mouseY >= 400 && mouseY <= 425) {
      stampColor = color(0, 0, 255);
    }
    if (mouseX >= 375 && mouseX <= 400 && mouseY >= 400 && mouseY <= 425) {
      stampColor = color(255, 255, 255);
    }
  }
}
