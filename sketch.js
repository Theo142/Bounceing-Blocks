var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);

  fixedSquare = createSprite(600,400,60,60)
  fixedSquare.shapeColor = ("Red")

  movingSquare = createSprite(400,200,60,60)
  movingSquare.shapeColor = ("Blue") 
  
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

}


function draw() {
  background(0,0,0);  
  movingSquare.x = World.mouseX;
  movingSquare.y = World.mouseY;

  if (isTouching(fixedSquare,movingSquare))
  {
    movingSquare.shapeColor = "red";
    fixedSquare.shapeColor = "red";
  }
  else {
    movingSquare.shapeColor = "green";
    fixedSquare.shapeColor = "green";
  }
bounceOff(movingRect,fixedRect)
  drawSprites();
}