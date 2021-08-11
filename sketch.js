
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;

var top_wall;
var ball
var button
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
 
  

  ground =new Ground(200,390,400,20);
 
 top_wall = new Ground(50,100,30,20);
  top_wall1 = new Ground(150,100,30,20);
  top_wall2 = new Ground(250,100,30,20);
  top_wall3 = new Ground(350,100,30,20);
  var ballOption = {

    restitution :0.8
    

  }

  ball=Bodies.circle(200,380,20,ballOption);
  
  World.add(world,ball);

  button=createImg('up.png');
  button.position(20,30);
  button.size(50,50);
  button.mouseClicked(vForce);
  
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  
  

  ground.show();
  top_wall.show();
  top_wall1.show();
  top_wall2.show();
  top_wall3.show();
  ellipse(ball.position.x,ball.position.y,20)
  Engine.update(engine);
}


