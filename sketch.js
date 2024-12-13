// Task 1 - Drawing with the mouse
function setup() {
  createCanvas(480, 480);
  fill(255, 0, 0);  // Red fill
  noStroke();       // No outline for the ellipse
}

function draw() {
  ellipse(mouseX, mouseY, 50, 50);  // Draw an ellipse at the mouse position
}

// Task 2 - Draw a continuous line
let prevX = 0;
let prevY = 0;

function setup() {
  createCanvas(480, 480);
  background(255);
  stroke(0, 102);
  strokeWeight(4);
}

function draw() {
  line(prevX, prevY, mouseX, mouseY); // Draw a line from previous position to current mouse position
  prevX = mouseX;
  prevY = mouseY;
}

// Task 3 - Calculate speed of movement
function setup() {
  createCanvas(480, 480);
  background(255);
}

function draw() {
  let weight = dist(mouseX, mouseY, pmouseX, pmouseY);  // Calculate distance (speed)
  strokeWeight(weight); // Set stroke weight to speed
  stroke(0);
  line(pmouseX, pmouseY, mouseX, mouseY);  // Draw line with variable weight
}

// Task 4 - Draw fluidly with easing
let easing = 0.05;
let x = 0;
let y = 0;

function setup() {
  createCanvas(480, 480);
  background(255);
}

function draw() {
  let targetX = mouseX;
  let targetY = mouseY;
  x += (targetX - x) * easing;  // Apply easing to X-axis
  y += (targetY - y) * easing;  // Apply easing to Y-axis
  fill(255, 0, 0);  // Red color
  noStroke();
  ellipse(x, y, 30, 30);  // Draw the ellipse with easing
}

// Task 5 - Conditionals
function setup() {
  createCanvas(480, 480);
  strokeWeight(30);
  background(204);
}

function draw() {
  stroke(102);
  line(40, 0, 70, height);

  if (mouseIsPressed) {
    stroke(0);  // Change stroke color when mouse is pressed
  } else {
    stroke(255);  // Change stroke color when mouse is not pressed
  }

  line(0, 70, width, 50);
}

// Task 6 - Find the cursor
let lineX;

function setup() {
  createCanvas(480, 480);
  lineX = width / 2;  // Initialize lineX at the center
}

