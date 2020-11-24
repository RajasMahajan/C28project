class Mango{
    constructor(x,y,r){
        this.x=x;
        this.y=y;
        this.radius=40;
        this.body=Bodies.circle(x,y,40,r);
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(mangoimage,this.x,this.y,40,40);
    }
}