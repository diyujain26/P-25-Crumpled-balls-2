const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,dustbin;
var ground;

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	ball = new Ball(100,400,30);
	//db1 = new Dustbin(850,620,200,10);

	//db2 = new Dustbin(745,575,10,100);
	
	dustbin = new Dustbin(850,575,300,300);

	ground = new Ground(400,690,800,20);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
  ball.display();
  ground.display();
  dustbin.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:130,y:-145});
	   
	 }
   }
