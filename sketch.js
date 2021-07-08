const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot, arrowImage, arrowX,arrow ;


function preload() {
    backgroundImg = loadImage("grass.png");
    fortImage = loadImage("fort.png")
    boyImage = loadImage("boy.png")
    arrowImage = loadImage("arrow2.png")
    demonImage = loadImage("demon2.png")
}

function setup(){
    var canvas = createCanvas(1500,700);
    engine = Engine.create();
    world = engine.world;
    bg = createSprite(750, 380, 1500, 700)
bg.addImage(backgroundImg)
bg.scale=2
fort1 = createSprite(200, 520, 100, 400)
fort1.addImage(fortImage)
fort1.mirrorX(fort1.mirrorX()*-1)
fort1.scale = 2
boy1 = createSprite(250, 200, 50, 100)
boy1.addImage(boyImage)
boy1.scale=0.5
fort2 = createSprite(1300, 520, 100, 400)
fort2.addImage(fortImage)
fort2.scale = 2
arrowX = 450
demon = createSprite(1300, 200, 100, 400)
demon.addImage(demonImage)
demon.scale = 0.4
arrow = createSprite(450, 175, 50 ,50)
        arrow.addImage(arrowImage)
        arrow.scale = 0.25
      arrow.visible = false
}

function draw(){
    
    background("white");
    Engine.update(engine);
    if (keyDown("right")){
        arrow.visible = true
        arrow.velocityX=5
        
        
    }
    if(arrow.isTouching(demon)){
        arrow.velocityX=0
        console.log(arrow.velocityX)

    }
    
    drawSprites()
   
    
}
function keyPressed() {
  
}


