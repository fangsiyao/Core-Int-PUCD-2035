function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
var a = 100; //largest square
var t;//angle of 4 sides
function Pythagoras(x){
  noStroke();
  if(x<30){
    fill(255, 192, 203,map(x, 0, a, 150, 255));//color of square
  }else {
    fill(107, 142, 35,map(x, 0, a, 150, 255));//color of square
  }
  rect(0,0,x,x);//
  
  if (x <= 2) return 0;//suqare sides smaller than 2, stop

  //top right square
  push();
  rotate(PI / 2 - t);//rotate about 37 degree
  translate(0,-x/5 * 3 - x/5*4);
  Pythagoras(x/5*4);
  pop();

  //top left square
  push();
  rotate( - t);//rotate 53°
  translate(0,-x/5 * 3);
  Pythagoras(x/5*3);
  pop(); 
}

function setup(){
    t = 53.1301024 / 360 * 2 * PI;//53deg
    createCanvas(windowWidth, windowHeight);
    background(259);
    noLoop();//draw()function only run once
}
function draw() {
// put drawing code here
  translate(windowWidth/2, windowHeight - a * 2);//put in middle of canvas
  Pythagoras(a);
}