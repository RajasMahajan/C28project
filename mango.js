class Mango{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.body=Bodies.circle(x,y,2,{isStatic:true});
        World.add(world,this.body);
    }
    display(){
        image(mangoimage,this.x,this.y,40,40);
    }
}