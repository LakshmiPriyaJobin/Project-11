var path,pathImg;
var boy,boyRunning;
function preload(){
  //pre-load images
  pathImg = loadImage('path.png');
  boyRunning = loadAnimation('Runner-1.png','Runner-2.png')
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  //path construction
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2

  //boy making
  boy = createSprite(100,335,60,60)
  boy.addAnimation('running',boyRunning);
  boy.scale = 0.09

}

function draw() {
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  

if(path.y > 400){
  path.y = height/2;
}



  
drawSprites();



}
