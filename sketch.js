var caveman, cavemanImg;
var log, logImg;
var coin, coinImg;
var bg, bgImg;
var invisibleground;
var coinGrp, logGrp;
var score;

function preload(){
bgImg = loadImage("assets/jungle.png")

cavemanImg = loadImage("assets/caveman.png")

logImg = loadImage("assets/log.png")

coinImg = loadImage("assets/coin.png")
}

function setup(){
  createCanvas(500,400);
  score = 0;

  bg = createSprite(50,50,5,5);
  bg.addImage(bgImg);
  bg.scale = 1.0;
  bg.velocityX = 1;

  caveman = createSprite(390,320,5,5);
  caveman.addImage(cavemanImg);
  caveman.scale = 0.3;

  //caveman.setCollider("circle",390,320,40);


  invisibleground = createSprite(10,390,1000,20);
  invisibleground.scale = 1.0
  invisibleground.visible = false;

  coinGrp=new Group();
  logGrp=new Group();
}

function draw() {
  background("blue");

  text("Score: "+ score,500,50);
  textSize(35);
  stroke("black");

  if(keyDown("space")){
    caveman.velocityY = -8
  }
  caveman.velocityY = caveman.velocityY + 0.5;

  caveman.collide(invisibleground);

  if(bg.x>400){
    bg.x = 300;
  }
  spawnlog();
  spawncoin();
  if(coinGrp.isTouching(caveman)){
    textSize(35);
    text("Congratulations");
  }
  drawSprites();
}

function spawnlog(){
  if(frameCount%300===0){
    log = createSprite(10,350,5,5);
    log.addImage(logImg);
    log.scale = 0.2;
    log.velocityX=1;
    log.lifetime = 400;
    logGrp.add(log);
  }
}

function spawncoin(){
  if(frameCount%300===0){
    coin = createSprite(25,200,5,5);
    coin.addImage(coinImg);
    coin.scale = 0.2;
    coin.velocityX=1;
    coin.lifetime = 400;
    coinGrp.add(coin);
  }
}
