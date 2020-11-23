var bullet, wall, speed, weight,deform,thickness


function preload() {
  
}  

function setup() {
  createCanvas(800,400);
  speed=random(30,50)
  weight=random(200,300)
  thickness=random(20,100)

  bullet=createSprite(100, 200, 50, 10);
  bullet.velocityX=speed;
  bullet.shapeColor="blue"

  wall=createSprite(700, 200, thickness, 200)
  wall.shapeColor="white"
}

function draw() {
  background(0);  

  if(touch(wall,bullet)){
    bullet.velocityX=0
    deform=0.5*weight*speed*speed/(thickness*thickness*thickness)
  }

  if(deform<10){
    wall.shapeColor="green"
  }


  if(deform>10){
    wall.shapeColor="red"
  }
  drawSprites();
}

