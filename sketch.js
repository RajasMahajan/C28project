
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
var ground;
var stone1;
var slingshot;
var mango1;
var mango;
var mango2;
var mango3;
var mango4;
var mango5;
var mango6;
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
    tree=Bodies.rectangle(550,390,50,50);
    ground=Bodies.rectangle(500,690,1000,20,{isStatic:true});
    World.add(world,ground);
    mango= new Mango(600,350,{isStatic:false});
    mango1=new Mango(640,400,{isStatic:false});
    mango2=new Mango(730,420,{isStatic:false});
    mango3=new Mango(675,335,{isStatic:false});
    mango4=new Mango(800,400,{isStatic:false});
    mango5=new Mango(550,430,{isStatic:false});
    mango6=new Mango(750,340,{isStatic:false});
	stone1= new Stone(85,565);
	Engine.run(engine);
	slingshot = new SlingShot(stone1.body,{x:80, y:567});
}


function draw() {
  rectMode(CENTER);
  background("green");

  Engine.update(engine);
  image(treeimage,450,280,460,430);
  image(boyimage,30,500,250,250);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1000,20);
  stone1.display();
  mango.display();
  mango2.display();
  mango3.display();
  mango1.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stone1.display();
 slingshot.display();

 detectollision(stone1,mango);
 detectollision(stone1,mango1);
 detectollision(stone1,mango2);
 detectollision(stone1,mango3);
 detectollision(stone1,mango4);
 detectollision(stone1,mango5);
 detectollision(stone1,mango6);
 //console.log(detectollision(stone1,mango));
  drawSprites();
 
}
function mouseDragged(){
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
}

function detectollision(lstone,lmango){
    mango.body.Position=lmango.body.position;
    stone1.body.Position=lstone.body.position;

  var   distance=dist(lstone.body.position.x,lstone.body.position.y,lmango.body.position.x,lmango.body.position.y);
  if(distance<=lmango.radius,lstone.radius){
      Matter.Body.setStatic(lmango.body,false);
  }
}
