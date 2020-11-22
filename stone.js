class Stone{

    constructor(x,y){
      //var ops={
  //}
        this.x= x;
        this.y= y;
        this.body=Bodies.rectangle(x,y,20,20,{isStatic:false});
        World.add(world,this.body);

    }
     display(){
     
        imageMode(CENTER);
        image(stoneimage,this.x,this.y,50,50);
        this.x = mouseX;
        this.y = mouseY;
    }
}