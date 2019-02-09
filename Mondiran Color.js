function setup() {
  createCanvas(800, 800);
}

function draw() {
  var leftLineX = mouseX;
  var rightLineX = mouseX + 290;
  var topLineY = mouseY - 160;
  var middleLineY = mouseY;
  var bottomLineY = mouseY + 40;
  
  var r = mouseX;
  var g = mouseX;
  var b = mouseX;

  background(240);
  noStroke();
  strokeCap(SQUARE);

  fill(r, 0, 0); // Red
  rect(leftLineX, 0, width-leftLineX, middleLineY); // Large red rectangle

  fill(0, 120, b); // Blue
  rect(0, middleLineY, leftLineX, height-middleLineY); // Smaller blue rectangle

  fill(r, g, 0);  // Yellow
  rect(rightLineX, bottomLineY, width-rightLineX, height-bottomLineY); // Yellow rectangle

  stroke(0); // Black
  strokeWeight(10);
  line(0, middleLineY, width, middleLineY); // middle horizontal
  line(leftLineX, 0, leftLineX, height); // left vertical
  line(rightLineX, middleLineY, rightLineX, height); // right vertical

  strokeWeight(15);
  line(rightLineX, bottomLineY, width, bottomLineY); // bottom horizontal

  strokeWeight(20);
  line(0, topLineY, leftLineX, topLineY); // top horizontal
}
