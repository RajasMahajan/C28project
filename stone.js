class Stone{

    constructor(x,y){
      //var ops={
  //}
        this.x= x;
        this.y= y;
        this.radius=50;
        this.body=Bodies.circle(x,y,50,{isStatic:false});
        World.add(world,this.body);

    }
     display(){
      ellipseMode(CENTER); 
      imageMode(CENTER);
       // image(stoneimage,this.x,this.y,30,30);
        //this.x = mouseX;
        //this.y = mouseY;
        var stonepos=this.body.position; 
        push()
         translate(stonepos.x, stonepos.y);
     
      image(stoneimage,0,0,this.radius,this.radius);
         pop() ;
    }
}