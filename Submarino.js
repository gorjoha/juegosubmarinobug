class Submarino {
  constructor(x, y, width, height){
    var options = {
      isStatic: true
  }
    this.body= Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=this.height;
    World.add(world,this.body);
  }
display(){
  var pos=this.body.position;
  // console.log(this.body.position)
  rectMode(CENTER);
  fill("blue");
  rect(pos.x,pos.y,this.width,this.height);
}
};
