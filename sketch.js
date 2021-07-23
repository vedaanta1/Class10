var trex ,trex_running;
var edges;
var ground, ground_image;
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  ground_image = loadImage("ground2.png");
``
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50, 160, 20, 30);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;

  ground = createSprite(300, 200, 600, 20);
  ground.addImage(ground_image);
  
  edges = createEdgeSprites();
}

function draw(){
  background("white")
  
  ground.velocityX = -2;
  if(ground.x <= 100){
    ground.x = ground.width/2;
  }


  if(keyDown("space") && trex.y > 170){
    trex.velocityY = -10;

    
  }
             
  trex.velocityY = trex.velocityY + 0.5;

  trex.collide(ground);



  drawSprites();
}
