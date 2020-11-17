
    

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var downBody, leftBody, rightBody;
var downSprite, leftSprite, rightSprite; 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	downSprite = createSprite( width/2, 650, 200, 20);
	downSprite.shapeColor = ('red');

	leftSprite = createSprite(290,610,20,100);
	leftSprite.shapeColor = ('red');

	rightSprite = createSprite(500, 610, 20, 100);
	rightSprite.shapeColor = ("red");


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	downBody = Bodies.rectangle(width/2, 655, 100, 10, {restitution:0, isStatic:true});
	World.add(world, downBody);

	leftBody = Bodies.rectangle(290,610,20,100,{restitution:0, isStatic:true});
	World.add(world, leftBody);

	rightBody = Bodies.rectangle(500, 610, 20, 100,{restitution:0, isStatic:true});
	World.add(world, rightBody);

	ground = Bodies.rectangle(width/2, 660, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  downSprite.x= downBody.position.x 
  downSprite.y= downBody.position.y

  leftSprite.x= leftBody.position.x 
  leftSprite.y= leftBody.position.y

  rightSprite.x= rightBody.position.x 
  rightSprite.y= rightBody.position.y
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  background(0);
  
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	
	Matter.Body.setStatic(packageBody, false);

    
  }
}