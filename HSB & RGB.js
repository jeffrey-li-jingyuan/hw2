function setup() {
    createCanvas(400, 400);
    background(220);
    colorMode(RGB, 400, 400, 100);
}

function draw() {
    let dog = random(width);
    let cat = random(height);
    fill(dog, cat, 100);
    noStroke()
    ellipse(dog, cat, 20);
}
