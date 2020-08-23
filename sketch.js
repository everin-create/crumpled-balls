
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(600,650,1200,20) 

    side1 = new Dustbin(600,640,200,20)

    side2 = new Dustbin(500,590,20,200)
	
    side3 = new Dustbin(700,590,20,200)
	
    paper = new Paper(50,600,10)
	

	//Create the Bodies Here.



	
  
}


function draw() {
  background(0);
  Engine.run(engine);
  ground.display();
  side1.display();
  side2.display();
  side3.display();
  paper.display();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW ){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:85});
	}

 }



