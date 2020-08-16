const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var box1,box2,box3;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//ball = Bodies.circle(200,100,10,10);

	ball = new Ball(100,400,20);

	box1 = new Dustbin(650,620,200,10);

	box2 = new Dustbin(545,575,10,100);
	
	box3 = new Dustbin(750,575,10,100);
  
	ground = new Ground(400,690,800,10);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ball.display();
  box1.display();
  box2.display();
  box3.display();
  ground.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	   
	 }
   }
