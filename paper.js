class Paper{
    constructor(x,y,radius){
    var options = {
        isStatic : false
        ,restitution :0.3
        ,friction:0.5
        ,density:1.2
     }
    
     this.body = Bodies.circle(x,y,radius,options);
     this.radius=radius
     World.add(world,this.body);
     }
     display(){
         var pos = this.body.position;
         this.body.position.x=mouseX
         this.body.position.y=mouseY
         push()
         translate(pos.x,pos.y)
         rotate(this.body.angle);
         fill("red");
         ellipseMode(RADIUS)
         ellipse(0,0,this.radius,this.radius);
         pop()
        }

}