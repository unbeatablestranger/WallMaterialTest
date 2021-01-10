var bullet,wall;
var speed,weight,thickness;
var carImg,start,startImg,wallImg;
var damage;


function preload()
{
  carImg = loadImage("Polish_20201229_102109711.png");
  startImg = loadImage("Polish_20201229_105028284.png");
  wallImg = loadImage("wallImage2.jpg");
}

function setup() 
{
  createCanvas(1300,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(70,200,50,10);
  bullet.shapeColor=color(0,0,255);
  

  start = createSprite(50,350,60,80);
  start.addImage("j",startImg);
  start.scale=0.2;

  wall=createSprite(1200,200,thickness,300);
  wall.shapeColor=color(80,80,80);
  wall.visible=true;

  
  
}

function draw()
{
  background("lightpink");

  if(mousePressedOver(start))
  {
    bullet.velocityX = speed;
  }

  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage > 10)
    {
      wall.shapeColor=color(255,0,0);
    }
      
      if(damage < 10)
       {
        wall.shapeColor=color(0,255,0);
       }
  }

  
  drawSprites();

}


  
