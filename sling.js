class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 20
        }
        this.pointB=pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
    this.sling.bodyA = body;
    }
    fly(){

        this.sling.bodyA = null;
    }
   // console.log("fly()")
   display(){
       //strokeWeight(100);
     //  stroke("black")
   // line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y);
   if (this.sling.bodyA)
 { 
    strokeWeight(3); 
    stroke("white"); 
    line( this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.pointB.x, this.pointB.y );
 }
   }
}
