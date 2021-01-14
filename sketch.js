var hr, min, sc;

function setup() {
  createCanvas(400, 400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255, 255, 255);
  
  translate(200, 200)
  rotate(-90);
  hr = hour();
  min = minute();
  sc = second();
  scAngle = map(sc, 0, 60, 0, 360);
  minAngle = map(min, 0, 60, 0, 360);
  hrAngle = map(hr%12, 0, 12, 0, 360);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minAngle);
  stroke("green");
  strokeWeight(7);
  line(0, 0, 70, 0);
  pop();

  push();
  rotate(hrAngle);
  stroke("blue");
  strokeWeight(7);
  line(0, 0, 50, 0);
  pop();

  strokeWeight(10);
  noFill();
  point(0, 0);
  stroke("red");
  arc(0, 0, 300, 300, 0, scAngle);
  stroke("green");
  arc(0, 0, 280, 280, 0, minAngle);
  stroke("blue");
  arc(0, 0, 260, 260, 0, hrAngle);

  drawSprites();
}