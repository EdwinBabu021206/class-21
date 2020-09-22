var fixedRect, movingRect,gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "blue";

  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "orange";

  // game object 3 and 4 are for bounceoff algorithm,
  gameObject3 = createSprite(200,150,130,30);
  gameObject3.shapeColor = "yellow";
  gameObject3.velocityY = 5;

  gameObject4 = createSprite(200,250,130,30);
  gameObject4.shapeColor = "white";
  gameObject4.velocityY = -5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  bounceOff(gameObject3,gameObject4);

  // isTouching();
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";

  }

  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red";

  }

  else{
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }

  drawSprites();
}

