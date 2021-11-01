var navio;
var navioMovendo;
var mar;
var sea;

function preload(){
sea = loadImage("sea.png");
navioMovendo = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
}

function setup(){
  createCanvas(400,400);

  mar= createSprite(200, 100, 80, 80);
  mar.addImage(sea);

  navio= createSprite(100, 200, 80, 80);
  navio.addAnimation("movendo", navioMovendo);
  navio.scale = 0.25
}

function draw() {
  background("blue");
  mar.velocityX= -5
  console.log(navio.y);
 if (mar.x < 0){
   mar.x = mar.width/2;
  }
    drawSprites();

 
}
