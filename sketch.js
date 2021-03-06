var xFruit = 0;
var yFruit = 0;
var scoreElement;

var segment = 10;
var direction='right';

const dif = 10;
const xStart=0; //starting x coordinate for snake
const yStart=250; //starting y coordinate for snake

var snake;


var x_coordinate = [];
var y_coordinate = [];


function setup() {
  createCanvas(800,400);
/*
 var snake = createSprite(400,300,10,800);

 var apple = createSprite(200, 200,10,10);

var wall = createSprite(400,300,10,800);

var wall2 = createSprite(0,300,10,800);

var wall3 = createSprite(0,0,800,10);

var wall4 = createSprite(0,400,800,10);
*/

scoreElement=createDiv('Score=0');
scoreElement.position(20,20);
scoreElement.id='score';
scoreElement.style('color','white');
frameRate(15);
stroke(255);
strokeWeight(10);
updateFruitCoordinate();

for(var i=0;i<segment;i++){
  x_coordinate.push(xStart+i*dif);
  y_coordinate.push(yStart);
}

}

function draw() {
  background(0);  
  for(var i=0;i<segment-1;i++){
    line(x_coordinate[i],y_coordinate[i],x_coordinate[i+1],y_coordinate[i+1]);
  }
  /*
  if (keyDown(LEFT_ARROW)) {
    //snake.x = snake.x-0.5;
    direction = "LEFT";
  }
  if (keyDown(RIGHT_ARROW)) {
   //snake.x = snake.x+0.5;
   direction = "RIGHT"; 
  }
  if (keyDown(UP_ARROW)) {
    //snake.y = snake.y-0.5;
 -   direction = "UP";
  }
  if (keyDown(DOWN_ARROW)) {
   //snake.y = snake.y+0.5;
   direction = "DOWN"; 
  }
  */
  updateSnakeCoordinate();
  checkGameStatus();
  checkForFruit();
  //drawSprites();
}

function updateSnakeCoordinate(){
  for(var i=0; i<segment-1; i++){
    x_coordinate[i] = x_coordinate[i+1]
    y_coordinate[i] = y_coordinate[i+1]
  }
  switch(direction){
  case 'up':
  x_coordinate[segment-1]=x_coordinate[segment-2];
  y_coordinate[segment-1]=y_coordinate[segment-2]-dif;
break;
  case 'down':
  x_coordinate[segment-1]=x_coordinate[segment-2];
  y_coordinate[segment-1]=y_coordinate[segment-2]+dif;
break;
    case 'right':
   x_coordinate[segment-1]=x_coordinate[segment-2]+dif;
  y_coordinate[segment-1]=y_coordinate[segment-2];
break;
case 'left':

  x_coordinate[segment-1]=x_coordinate[segment-2]-dif;
  y_coordinate[segment-1]=y_coordinate[segment-2];
  break;
}
}

function updateFruitCoordinate(){
  xFruit=floor(random(10,(width-100)/10))*10;
  yFruit=floor(random(10,(height-100)/10))*10;
}

function checkGameStatus(){
  if(
    x_coordinate[x_coordinate.length-1]>width||
    x_coordinate[x_coordinate.length-1]<0||
    y_coordinate[y_coordinate.length-1]>height||
    y_coordinate[y_coordinate.length-1]<0||
    checkSnakeCollision()
  ){
    noLoop();
    const scoreVal=parseInt(scoreElement.html().substring(8));
    scoreElement.html('GameEnded!your score was'+scoreVal);
  }
}
function checkSnakeCollision(){
  const snakeHeadX=x_coordinate[x_coordinate.length-1];
  const snakeHeadY=y_coordinate[y_coordinate.length-1];
  for(var i=0;i<x_coordinate.length-1;i++){
    if(x_coordinate[i]===snakeHeadX&&y_coordinate[i]===snakeHeadY){
      return true();    
    }
  }
}
function checkForFruit(){
  point(xFruit,yFruit)
  if(x_coordinate[x_coordinate.length-1]===xFruit&&y_coordinate[y_coordinate.length-1]===yFruit){
    const previousScore=parseInt(scoreElement.html().substring(8))
    scoreElement.html('score='+(previousScore+1))
    x_coordinate.unshift(x_coordinate[0]);
    y_coordinate.unshift(y_coordinate[0]);
    segment++;
    updateFruitCoordinate();
  }
}
function keyPressed(){
  switch(keyCode){
    case 74:
      if(direction!=='right'){
        direction='left'
      }
      break;
    case 76:
        if(direction!=='left'){
          direction='right'
        }
        break;
    case 75:
          if(direction!=='up'){
            direction='down'
          }
          break;
    case 73:
            if(direction!=='down'){
              direction='up'
            }
        break;
            
  }
}