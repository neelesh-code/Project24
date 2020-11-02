class Paper{
    constructor(x,y,radius){
        this.body= Matter.Bodies.circle(x,y,radius, {isStatic:false, restitution:0.3, friction:0.5, density:1.2});
        this.radius=radius;
        World.add(world, this.body)
    }

    display(){

        push();
        ellipseMode(CENTER);
        fill("purple");
        stroke("purple");
        var pos=this.body.position
        ellipse(pos.x,pos.y, this.radius*2,this.radius*2);
        pop();

    }








}
