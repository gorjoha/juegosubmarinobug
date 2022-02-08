class Ball{
    constructor(x,y,r){
        var options={
            'density':1,
            'frictionAir':0.05
        }
        
        this.body=Bodies.circle(x,y,r,options);
        this.x=x;
        this.y=y;
        this.r=r;
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }




}