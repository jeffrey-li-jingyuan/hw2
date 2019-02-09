var x1 = 0
var speed1 = 3

var x2 = 0
var speed2 = 1

var x3 = 0
var speed3 = 4

var x4 = 0
var speed4 = 25

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  strokeWeight(0);
  fill(0);
  
  //ball1
  ellipse(x1, 100, 50, 50);
  if (x1 < 0 || x1 > width - 25){
    speed1 = speed1 * - 1
  }
  x1 = x1 + speed1
  
  //ball2
  stroke(0);
  strokeWeight(0)
  fill(255, 240, 0);
  ellipse(300, x2, 120, 120);
   if (x2< 0 || x2 > height - 60){
    speed2 = speed2 * - 1.05
  }
  x2 = x2 + speed2
  
  //ball3a
  stroke(x3, x2, x1);
  strokeWeight(5)
  fill(x1, x2, x3);
  ellipse(x3, x2, 120, 120);
   if (x3< 0 || x3 > height - 60){
    speed3 = speed3 * - 1.05
  }
  x3 = x3 + speed3
  
  //ball3b
  stroke(x3, x2, x1);
  strokeWeight(5)
  fill(x3, x2, x1);
  ellipse(x3, x2, 50, 50);
   if (x3< 0 || x3 > height - 60){
    speed3 = speed3 * - 1.05
  }
  x3 = x3 + speed3
  
  //ball4
  stroke(0)
  strokeWeight(0)
  fill(0);
  ellipse(x3, x4, 10, 10);
   if (x4 < 0 || x4 > height){
    speed4 = speed4 * - 1.05
  }
   x4 = x4 + speed4
  
  fill(240, 90, 10)
  strokeWeight(35)
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(millis() / 1000, 173));
  ellipse  (0, 0, 20, 20);
}
