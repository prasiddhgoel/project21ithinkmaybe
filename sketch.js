var bullet,wall
var speed,weight


function setup() {

  speed=random(55,321)
  weight=random(30,52)
 thickness=random(22,83)

  createCanvas(800,800);
  bullet=createSprite(30,200,50,50) 


  bullet.velocityX=speed;
  bullet.shapeColor=color(225,105,10)

  
  wall=createSprite(700,200,thickness,60)
  wall.shapeColor=color(80,80,80)
}


function draw() {
  background(255,255,255);  




if (hasCollided(bullet,wall))
{
  bullet.velocityX=0
  var damage=0.5 * weight * speed * speed/(thickness *thickness *thickness)

  if (damage>10)
 {
   wall.shapeColor=color(225,0,0)
 }

 if (damage<10)
 {
   wall.shapeColor=color(0,225,0)
 }
}
drawSprites()
}

function hasCollided(bullet,wall)
{
  bulletRightEdge=bullet.x+bullet.width
  wallLeftEdge=wall.x
  if (bulletRightEdge>=wallLeftEdge)
{
  return true
}
 return false
}
