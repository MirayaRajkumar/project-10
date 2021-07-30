var ship, sea
function preload(){
  shipAnimation = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,400,400);
  sea.addAnimation("sea",seaImage);
  sea.scale = 0.5;
  sea.velocityX = 2;
  ship = createSprite(250,250);
  ship.addAnimation("ship",shipAnimation);
  ship.scale = 0.2;
}

function draw() {
  background("blue");
  if(sea.x > 1000){
    sea.x = 0;
  }
  drawSprites();
}
