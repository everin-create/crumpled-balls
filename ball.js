class Paper{
    constructor(x,y,radius){
      var options={
          isStatic:false,
          restitution :0.3,
          friction:0.5,
          density:1.2
      }
      this.body=Bodies.circle(x,y,width,options)
      this.radius=radius
      World.add(world,this.body)
    }
   display(){
     ellipseMode(RADIUS)
     fill(255)
     ellipse(0,0,this.radius)

    }
}
    