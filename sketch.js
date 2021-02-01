
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var ground
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1= new Bob(200,500);
	bob2= new Bob(250,500);
	bob3= new Bob(300,500);
	bob4= new Bob(350,500);
	bob5= new Bob(400,500);

	ground= new Ground(310,250)

	rope1= new Chain(bob1.body, ground.body,-110,0)
	rope2= new Chain(bob2.body, ground.body,-60,0)
	rope3= new Chain(bob3.body, ground.body,-10,0)
	rope4= new Chain(bob4.body, ground.body,40,0)
	rope5= new Chain(bob5.body, ground.body, 90,0)
	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  ground.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob5.body, bob5.body.position, {x:55,y:-85})
	}
}

