class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 130
        }
        this.chain = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.chain);
    }

    display(){
        var pointA = this.chain.bodyA.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
    }
    
}