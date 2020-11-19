
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
dustbin1=new Dustbin(100,200)
ball1=new Ball(200,200)

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.fetch()
  ball1.fetch()
  drawSprites();
 
}



