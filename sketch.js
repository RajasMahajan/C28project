
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boyimage;
var boy;
var tree;
var treeimage;
var stoneimage;
var s1;
var slingshot;
function preload()
{
	boyimage=loadImage("boy.png");
	treeimage=loadImage("tree.png");
	stoneimage=loadImage("stone.png");
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy=Bodies.rectangle(200,400,50,50);
	tree=Bodies.rectangle(550,400,50,50);
	s1= new Stone(85,565);
	Engine.run(engine);
	slingshot = new SlingShot(s1.body,{x:85, y:565});
}


function draw() {
  rectMode(CENTER);
  background("green");
  Engine.update(engine);
  image(treeimage,450,280,460,430);
  image(boyimage,30,500,250,250);
  s1.display();
 slingshot.display();
  drawSprites();
 
}



