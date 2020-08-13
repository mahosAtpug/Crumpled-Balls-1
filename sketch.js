
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,ground1;
var part1,part2,part3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     paper1 = new Paper(100,100,10)
     ground1 = new Ground(400,690,800,10);
     part1 = new Dustbin(500,635,10,100);
     part2 = new Dustbin(570,680,130,10);
     part3 = new Dustbin(630,635,10,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ground1.display();
  part1.display();
  part2.display();
  part3.display();
  drawSprites();
 
}



