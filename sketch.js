
var gameState="serve";
var  score = 0;
var snake,snakeAn,snakeImg;
var bgImg;
var score;
var food,foodImg;
var line1,line2,line3,line4;


function preload(){
  snakeAn = loadAnimation("snake1.png","snake2.png","snake3.png","snake4.png","snake5.png","snake6.png","snake7.png","snake8.png","snake9.png","snake10.png",);
  bgImg=loadImage("bg.png");
  foodImg=loadImage("food.png")
 
}

function setup() {
  createCanvas(600, 600);
  line1=createSprite(5,5,10,1200);
  line2=createSprite(595,5,10,1200);
  line3=createSprite(100,5,1000,10);
  line4=createSprite(100,595,1000,10);
  
  snake = createSprite(300,400,20,50);
  snake.addAnimation("crawling",snakeAn);
  foodGroup=new Group();

}

function draw() {
  background(bgImg);
  textSize(20);
  text("Score: "+ score, 500,50);

  if(gameState==="serve"){
  text("press s to start.",250,300);
     if(keyDown("s")){
      gameState="play";
     }
    }

  
    if(gameState==="play"){

      if(frameCount%300===0){
        Food();
       }
    
      
      
        if(snake.isTouching(food)){
          foodGroup.destroyEach();
          score=score+1;
          snake.height=snake.height+1;
        }
      
      if(snake.isTouching(line1)){
        gameState="end"
      }

      if(snake.isTouching(line2)){
        gameState="end"
      }
      if(snake.isTouching(line3)){
        gameState="end"
      }

      if(snake.isTouching(line4)){
        gameState="end"
      }
    }

   if(gameState==="end"){
       text("gameOver",250,300);
       text("press r to reset the game",250,350);
    }
    if(keyDown("r")){
      gameState="serve";
    }
  drawSprites();


}

function Food(){
  food=createSprite(Math.round(random(50,550)),Math.round(random(50,550)));
  food.addImage(foodImg);
  food.scale=0.06;
  foodGroup.add(food)
}
