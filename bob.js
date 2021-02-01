class Bob{
    constructor(x,y){
       var options={
        restitution:0.3,
		friction:0.5,
        density:1.2,
       } 
    this.body= Bodies.circle(x,y,20,options);
    this.body.x=this.body.x;
    this.body.y= this.body.y;
    World.add(world, this.body)
    }
display(){
    ellipseMode(RADIUS);
    fill("red")
    ellipse(this.body.position.x,this.body.position.y, 20, 20);
}

}