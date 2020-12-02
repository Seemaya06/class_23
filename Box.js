class Box{
    constructor(x,y,width,height){
    var options = {
        restitution: 1.0
    }

    this.body = Bodies.rectangle(x,y,width,height, options)
    World.add(world,body)
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("yellow")
        rect(pos.x,pos.y,this.width,this.height);
    }
}