let camPos = [0,0,0];
let camView = [0,0,0];
let boxPos = [0,0,1200];
let x = 0;
let speed = 8
let tuch = false;

function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  console.log(tuch);

  box(50,50,50);

  if(keyIsDown(39))       //rArrow
  {
    camPos[0] -= 2;
  }
  if(keyIsDown(37))       //lArrow
  {
    camPos[0] += 2;
  }
  
  if(keyIsDown(38))       //UpArrow
  {
    camPos[1] -= 2;
  }
  if(keyIsDown(40))       //DownArrow
  {
    camPos[1] += 2;
  }

  camera(camPos[0], camPos[1], camPos[2]-400, camView[0] + camPos[0], camView[1] + camPos[1], camView[2] + camPos[2], 0,1,0);


  if(boxPos[2] < -401) 
  {
    boxPos[2] = 1200;
    boxPos[0] = random(-100,100)
    boxPos[1] = random(-100,100)
  }
    
  translate(boxPos[0],boxPos[1],(boxPos[2]))
  box(100);

  boxPos[2] -= speed;

  if(boxPos[0] - camPos[0] < 50 && boxPos[0] - camPos[0] > 50 && boxPos[1] - camPos[1] < 50 && boxPos[1] - camPos[1] > 50)
  {
    fill(255,0,0);
  }

}
