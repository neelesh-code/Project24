
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, dustbin2, dustbin3;
var ground1;
var paper1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new ground(width/2, height-50,width, 5);
	dustbin1= new dustbin(width/3+150,height-80,25,100);
	dustbin2= new dustbin(2*width/3+150, height-80,25,100);
	dustbin3=new dustbin(width/2+150,height-70,800/3,25);
	paper1=new paper(400,350,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper1.display();
  drawSprites();
 
}



