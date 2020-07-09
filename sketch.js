var paper,dustbin,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,680,800,20);



	//Create the Bodies Here.


	Engine.run(engine);
  
	base = new Ground (600,665,100,10);
	fill("white")
	leftWall = new Ground(550,650,20,50);
	fill("white")
	rightWall = new Ground(650,650,20,50);
	fill("white")

	paper = new Paper(200,500,20);
	
}


function draw() {
  
  background(0);
  
  ground.display();
	base.display();
	leftWall.display();
	rightWall.display();
	paper.display();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:47,y:-47});
    }
}

