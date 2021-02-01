class Ground{
    constructor(x,y){
        var opt={
            isStatic:true,
        }
        this.body= Bodies.rectangle(x,y,300,15,opt);
        this.body.x=this.body.x;
        this.body.y=this.body.y;
    }
    display(){
        rectMode(CENTER);
        fill("white")
        rect(this.body.position.x, this.body.position.y, 300,15)
    }
}