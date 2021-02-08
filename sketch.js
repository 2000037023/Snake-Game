var segment = 10;
var direction;
var dif = 10;
var snake = createSprite(400,300,10,800);

var x_coordinate = [];
var y_coordinate = [];


function setup() {
  createCanvas(800,400);
 var apple = createSprite(200, 200,10,10);

var wall = createSprite(400,300,10,800);

var wall2 = createSprite(0,300,10,800);

var wall3 = createSprite(0,0,800,10);

var wall4 = createSprite(0,400,800,10);

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  if (keyDown(LEFT_ARROW)) {
    snake.x = snake.x-0.5;
    direction = "LEFT";
  }
  if (keyDown(RIGHT_ARROW)) {
   snake.x = snake.x+0.5;
   direction = "RIGHT"; 
  }
  if (keyDown(UP_ARROW)) {
    snake.y = snake.y-0.5;
    direction = "UP";
  }
  if (keyDown(DOWN_ARROW)) {
   snake.y = snake.y+0.5;
   direction = "DOWN"; 
  }
  updateSnakeCoordinate();
  drawSprites();
}

function updateSnakeCoordinate(){
  for(var i=0; i<segment-1; i++){
    x_coordinate[i] = x_coordinate[i++]
    y_coordinate[i] = y_coordinate[i++]
  }
if(direction==="UP"){
  x_coordinate[segment-1]=x_coordinate[segment-2];
  y_coordinate[segment-1]=y_coordinate[segment-2]-dif;
}
if(direction==="DOWN"){
  x_coordinate[segment-1]=x_coordinate[segment-2];
  y_coordinate[segment-1]=y_coordinate[segment-2]+dif;
}
if (direction==="RIGHT"){ 
   x_coordinate[segment-1]=x_coordinate[segment-2]+dif;
  y_coordinate[segment-1]=y_coordinate[segment-2];
}
if(direction==="LEFT"){
  x_coordinate[segment-1]=x_coordinate[segment-2]-dif;
  y_coordinate[segment-1]=y_coordinate[segment-2];
}
}