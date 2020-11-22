
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boyimage;
var gameState="sling";
var boy;
var tree;
var treeimage;
var stoneimage;
var stone1;
var slingshot;
var mango1;

function preload()
{
	boyimage=loadImage("boy.png");
	treeimage=loadImage("tree.png");
    mangoimage=loadImage("mango.png");
    stoneimage=loadImage("stone.png");
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy=Bodies.rectangle(200,400,50,50);
    tree=Bodies.rectangle(550,400,50,50);
    mango= new Mango(600,350);
    mango1=new Mango(650,360);
	stone1= new Stone(85,565);
	Engine.run(engine);
	slingshot = new SlingShot(stone1.body,{x:500, y:350});
}


function draw() {
  rectMode(CENTER);
  background("green");

  Engine.update(engine);
  image(treeimage,450,280,460,430);
  image(boyimage,30,500,250,250);
  stone1.display();
  mango.display();
  mango1.display();
 //slingshot.display();
 detectollision(stone1,mango);
 detectollision(stone1,mango1);
 console.log(detectollision(stone1,mango))
  drawSprites();
 
}
/*function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}
function keyPressed(){
    if(keyCode === 32){
     Matter.Body.setPosition(stone1.body,{x:500,y:350});
       slingshot.attach(stone1.body);
       gameState="onSling";

    }
}*/

function detectollision(lstone,lmango){
    //mango.body.Position=lmango.body.position;
    //stone1.body.Position=lstone.body.position;

  var   distance=dist(lstone.body.position.x,lstone.body.position.y,lmango.body.position.x,lmango.body.position.y);
  if(distance<=lmango.r,lstone.r){
      Matter.Body.setStatic(lmango.body,false);
  }
}
