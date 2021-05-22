//namespacing
const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;

var world,engine,ground,box1;

function setup() {
  createCanvas(400,400);
  engine= Engine.create();
    world=engine.world;
  /*  var ball_options={
      restitution:2
    }
    ball=Bodies.circle(100,200,14,ball_options)
    World.add(world,ball);*/
  var ground_options={
    isStatic:true
  }

   box1= new Box();

  ground=Bodies.rectangle(200,375,400,50, ground_options);
  World.add(world,ground )
  console.log(box1)
}

function draw() {
  background("black");  
  Engine.update(engine)
  rectMode(CENTER)
  rect(ground.position.x, ground.position.y,400,50)
  box1.display();
  /*ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,14,14)*/
 // drawSprites();
}