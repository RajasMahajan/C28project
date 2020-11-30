class Mango{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.radius=40;
        this.body=Bodies.circle(x,y,40,{isStatic:true});
        World.add(world,this.body);
    }
    display(){
        ellipseMode(CENTER);
        //ellipse(this.x,this.y,40,40)
        imageMode(CENTER);
        image(mangoimage,this.body.position.x,this.body.position.y,50,50);
    }
}