
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage,bananagroup
var FoodGroup, obstacleGroup
var score
var ban
var ground,groundimage
var survivalscore=0


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,200)

  monkey=createSprite(100,150,10,10);
  monkey.addAnimation("monk",monkey_running);
  monkey.scale=0.1;
  
  bananagroup= new Group();
  
  obstacleGroup= new Group();
  ground=createSprite(250,193,1000,20)
  ground.velocityX=-1
}


function draw() {
background("white");
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
 SurvivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ SurvivalTime,100,50);
  
  spawnobstacle();
  
  if(keyDown("space")) {
    monkey.velocityY = - 12;
  }
  
   if (ground.x < 0){
    ground.x  = ground.width/2;
  }  
  
  monkey.velocityY = monkey.velocityY +0.8
  
  if (monkey.isTouching(obstacleGroup)){
    ground.velocityX = 0
    obstacleGroup.setVelocityXEach(0)
    bananagroup.setVelocityXEach(0)
  }
  
  monkey.collide(ground);
  eatable();
  drawSprites();
}
function eatable(){
   if (frameCount % 60 === 0){
   ban = createSprite(600,random(5,105),10,40);
   ban.velocityX = -6;
ban.addImage(bananaImage);
ban.scale=0.1;
     
     bananagroup.add(ban);
     
   }     
   }


  
function spawnobstacle(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,165,10,40);
   obstacle.velocityX = -6;
  
obstacleGroup.add(obstacle);
}
}

