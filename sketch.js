

var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, 
    backgroundImage;

var gameState = 1;
var gameState = 2;

gameState = 1;
function preload(){
  
  backgroundImage = loadImage("backg.jpg");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("monster2.jpg");
  green_balloonImage = loadImage("monster3.jpg");
  pink_balloonImage = loadImage("monster4.jpg");
  blue_balloonImage = loadImage("monster5.jpg");
  
}



function setup() {
  createCanvas(displayWidth,displayHeight);
  
  //creating background
  background = createSprite(600,600);
  background.addImage(backgroundImage);
  background.scale = 3;
  
  // creating bow to shoot arrow
  bow = createSprite(600,300,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0  
  redB= new Group();
  greenB= new Group();
  blueB= new Group();
  pinkB= new Group();
  arrowGroup= new Group();
 
  
}

function draw() {


  if(gameState===1){
  // moving ground
    background.velocityX = -3
   

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  
  if (arrowGroup.isTouching(redB)) {
  redB.destroyEach();
  arrowGroup.destroyEach();
    score=score+1;
}




 if (arrowGroup.isTouching(greenB)) {
  greenB.destroyEach();
  arrowGroup.destroyEach();
  score=score+3;
}



 if (arrowGroup.isTouching(blueB)) {
  blueB.destroyEach();
  arrowGroup.destroyEach();
  score=score+2;
}



if (arrowGroup.isTouching(pinkB)) {
  pinkB.destroyEach();
  arrowGroup.destroyEach();
  score=score+1;
}
camera.position.x=displayWidth/2
camera.position.y = displayHeight/2

drawSprites();
stroke("white")
 textSize(20)
 text("Score: "+ score, 650,50);
  
if(score>=15){
  gameState = 2;
  
}
  }
  
  

if(gameState===2){
  arrowGroup.destroyEach();
  blueB.destroyEach();
  redB.destroyEach();
  greenB.destroyEach();
  pinkB.destroyEach();
  textSize(35);
  stroke("white")
  fill("black")
  text("Wow!Congrats! You have scored more than/equal to 15points!",50,200);
  
}



  
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 200;
  red.scale = 0.3;
  redB.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 200;
  blue.scale = 0.3;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 200;
  green.scale = 0.3;
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 200;
  pink.scale = 0.3
  pinkB.add(pink);
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 600;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 250;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
   
}






