var paper;
var ground;
var box;
var launcher;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function preload(){

}

function setup() {
	createCanvas(1365,500);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(682,450,1365,100);
  
  box = new Dustbin(1000,335,150,20);
  
  paper = new Paper(300,390,70);

  launcher = new Launcher(paper.body,{x:300, y:200});

	Engine.run(engine);
  
}


function draw() {
  background("white");
  
  paper.display();
  ground.display();
  box.display();
  launcher.display();

  drawSprites();
 
}

function keyPressed() {
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:70,y:-70})
  }
}

function mouseDragged() {
  Matter.Body.setPosition(paper.body,{x:mouseX, y:mouseY})
}

function mouseReleased() {
  launcher.fly();
}
