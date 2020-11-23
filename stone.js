class Stone{

    constructor(x,y){
      //var ops={
  //}
        this.x= x;
        this.y= y;
        this.radius=30;
        this.body=Bodies.circle(x,y,30,{isStatic:false});
        World.add(world,this.body);

    }
     display(){
     
        imageMode(CENTER);
       // image(stoneimage,this.x,this.y,30,30);
        //this.x = mouseX;
        //this.y = mouseY;
        var stonepos=this.body.position; 
        push()
         translate(stonepos.x, stonepos.y);
       //  ellipseMode(RADIUS) 
      image(this.image,0,0,this.radius,this.radius);
         pop() ;
    }
}