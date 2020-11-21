
var hr;
var mn;
var sc;

var scAngle, mnAngle, hrAngle;


function setup() {
  createCanvas(800,400);
  //angleMODE(DEGREES);
}

function draw() {
  background(255,255,255);

  translate(200,200);
  rotate(-90);
  
  hr = hour();
  mn = minute();
  sc = second();


  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr%12, 0, 12,0,360);

push();
  stroke(255,0,0);
  strokeWeight(7);
  rotate(scAngle);
  line(0,0,100,0);
pop();

push();
  stroke(0,255,0);
  strokeWeight(7);
  rotate(mnAngle);
  line(0,0,150,0);
pop();
  
push();
  stroke(0,0,255);
  strokeWeight(7);
  rotate(hrAngle);
  line(0,0,75,0);
pop();

push();
stroke("red")
strokeWeight(5);
noFill();
arc(0, 0, 200, 200, 0, scAngle);
pop();

push();
stroke(0,255,0)
strokeWeight(5);
noFill();
arc(0, 0, 300, 300, 0, mnAngle);
pop();


push();
stroke(0,0,255)
strokeWeight(5);
noFill();
arc(0, 0, 150, 150, 0, hrAngle);
pop();


  drawSprites();
}